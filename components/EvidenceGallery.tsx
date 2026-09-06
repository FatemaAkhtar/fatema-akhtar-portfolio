import { listFolder, resolveShot, humanize } from "@/lib/evidence";
import type { Project } from "@/lib/content";

/**
 * Dashboard screenshots are treated as evidence, not decoration.
 *
 * Primary path: copy a project's screenshot folder into
 *   /public/dashboards/<shotDir>/
 * Any file names work. They render in natural sort order (1, 2, 10, not 1, 10, 2)
 * and pick up the written captions in that same order.
 */
export default function EvidenceGallery({ project }: { project: Project }) {
  const found = listFolder(project.shotDir);

  /* ---- Nothing dropped in yet: show what the page is waiting for. ---- */
  if (found.length === 0) {
    const named = project.shots
      .map((s) => ({ shot: s, img: resolveShot(s.file) }))
      .filter((x) => x.img !== null);

    if (named.length === 0) {
      return (
        <>
          <div className="note">
            <p style={{ marginBottom: 10 }}>
              <b>Setup note, visible only until screenshots are added.</b>
            </p>
            <p>
              Copy this project&rsquo;s dashboard images into{" "}
              <code className="mono">/public/dashboards/{project.shotDir}/</code>{" "}
              (any file names, no renaming). They appear here in order, with
              the captions below already attached.
            </p>
          </div>
          <div className="stack gap-28">
            {project.shots.map((s) => (
              <figure className="figure" key={s.file}>
                <div
                  className="slot"
                  role="img"
                  aria-label={`Placeholder for ${s.title}`}
                >
                  <b>Awaiting screenshot</b>
                  <code>/public/dashboards/{project.shotDir}/</code>
                </div>
                <figcaption>
                  <b>{s.title}</b>
                  <p>{s.notice}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      );
    }

    /* Legacy path: exact-named files at the folder root. */
    return (
      <div className="stack gap-28">
        {named.map(({ shot, img }, i) => (
          <figure className="figure" key={shot.file}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img!.src}
              width={img!.width}
              height={img!.height}
              alt={`${shot.title}: ${shot.notice}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="(max-width: 800px) 100vw, 760px"
            />
            <figcaption>
              <b>{shot.title}</b>
              <p>{shot.notice}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  /* ---- Images present: pair each with its caption, in order. ---- */
  return (
    <div className="stack gap-28">
      {found.map((img, i) => {
        const written = project.shots[i];
        const title = written?.title ?? humanize(img.file);
        const notice = written?.notice;

        return (
          <figure className="figure" key={img.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              width={img.width}
              height={img.height}
              alt={notice ? `${title}: ${notice}` : `${title}, dashboard view from ${project.shortTitle}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="(max-width: 800px) 100vw, 760px"
            />
            <figcaption>
              <b>{title}</b>
              {notice ? (
                <p>{notice}</p>
              ) : (
                <p className="mono" style={{ fontSize: "0.6875rem" }}>
                  Caption not written yet. Add one to{" "}
                  <code>shots[{i}]</code> in lib/content.ts
                </p>
              )}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
