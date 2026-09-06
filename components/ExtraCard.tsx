import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { ExtraProject } from "@/lib/content";
import type { Found } from "@/lib/evidence";

/**
 * Additional Work entries that live in a GitHub repository rather than in a
 * case study. Deliberately reuses the exact .pcard markup and classes as the
 * case-study cards, so nothing new is introduced visually: the only
 * differences are the call to action, which goes to the repository, and the
 * fact that the title is not a link to a /work route that does not exist.
 */
export default function ExtraCard({
  project: p,
  shot,
}: {
  project: ExtraProject;
  shot?: Found | null;
}) {
  const caption = p.preview?.caption;

  return (
    <Reveal
      as="article"
      className={`pcard pcard--sub${shot ? " pcard--shot" : ""}`}
    >
      {shot ? (
        <figure className="pcard__shot">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
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
              sizes="(max-width: 940px) 92vw, 620px"
              quality={90}
              loading="lazy"
            />
          </a>
          {caption ? (
            <figcaption className="pcard__cap">{caption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="pcard__index">Project {p.index}</div>

      <div className="pcard__body">
        <p className="pcard__domain">{p.domain}</p>
        <h3 className="pcard__title">
          <a href={p.github} target="_blank" rel="noopener noreferrer">
            {p.shortTitle}
          </a>
        </h3>

        <div className="pcard__q">
          <b>Question</b>
          <p>{p.question}</p>
        </div>

        <p className="pcard__desc">{p.summary}</p>
        <p className="pcard__tools">{p.tools.join(" · ")}</p>

        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow"
        >
          View project <span aria-hidden="true">↗</span>
        </a>
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
