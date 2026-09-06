import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Project } from "@/lib/content";
import type { Found } from "@/lib/evidence";

export default function ProjectCard({
  project: p,
  shot,
  subdued = false,
}: {
  project: Project;
  /** Resolved on the server so intrinsic width/height are known: no layout shift. */
  shot?: Found | null;
  /** Additional work: same treatment, smaller preview, so the hierarchy holds. */
  subdued?: boolean;
}) {
  const caption = p.preview?.caption;

  return (
    <Reveal
      as="article"
      className={`pcard${shot ? " pcard--shot" : ""}${
        subdued ? " pcard--sub" : ""
      }`}
    >
      {shot ? (
        <figure className="pcard__shot">
          <Link
            href={`/work/${p.slug}`}
            className="pcard__shotlink"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={shot.src}
              width={shot.width}
              height={shot.height}
              alt={
                caption
                  ? `${p.shortTitle} dashboard. ${caption}`
                  : `${p.shortTitle} dashboard`
              }
              sizes={
                subdued
                  ? "(max-width: 940px) 92vw, 620px"
                  : "(max-width: 940px) 92vw, 916px"
              }
              quality={90}
              loading="lazy"
            />
          </Link>
          {caption ? (
            <figcaption className="pcard__cap">{caption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="pcard__index">Project {p.index}</div>

      <div className="pcard__body">
        <p className="pcard__domain">{p.domain}</p>
        <h3 className="pcard__title">
          <Link href={`/work/${p.slug}`}>{p.shortTitle}</Link>
        </h3>

        <div className="pcard__q">
          <b>Question</b>
          <p>{p.question}</p>
        </div>

        <p className="pcard__desc">{p.summary}</p>
        <p className="pcard__tools">{p.tools.join(" · ")}</p>

        <Link href={`/work/${p.slug}`} className="link-arrow">
          Read case study <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="pcard__side">
        <div className="pcard__evidence">Evidence</div>
        {p.figures.map((f) => (
          <div className="pcard__fig" key={f.label}>
            <b>{f.value}</b>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
