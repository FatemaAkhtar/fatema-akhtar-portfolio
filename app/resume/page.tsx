import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import Reveal from "@/components/Reveal";
import { PERSON, EXPERIENCE, EDUCATION } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "View or download the résumé of Fatema Akhtar, Data Analyst, Mumbai.",
  alternates: { canonical: "/resume" },
};

function has(file: string) {
  try {
    const p = path.join(process.cwd(), "public", file);
    return fs.existsSync(p) && fs.statSync(p).size > 0;
  } catch {
    return false;
  }
}

export default function ResumePage() {
  const pdf = has("fatema-akhtar-resume.pdf");
  const preview = has("resume-preview.png");

  return (
    <>
      <section className="shell cs-hero">
        <Reveal>
          <p className="eyebrow">Résumé</p>
          <h1 className="cs-hero__title">Fatema Akhtar, Data Analyst</h1>
          <p className="cs-hero__sub">
            The condensed version. The{" "}
            <Link href="/work" className="link-u">
              case studies
            </Link>{" "}
            are where the reasoning is.
          </p>
        </Reveal>

        <Reveal delay={70}>
          <div className="row mt-40">
            {pdf ? (
              <>
                <a
                  className="btn"
                  href={PERSON.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the PDF <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn--ghost" href={PERSON.resume} download>
                  Download PDF
                </a>
              </>
            ) : (
              <Link className="btn" href="/contact">
                Request the résumé by email <span aria-hidden="true">→</span>
              </Link>
            )}
            <a
              className="btn btn--ghost"
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      {pdf && preview ? (
        <section className="shell section--tight">
          <Reveal>
            <div className="sheet">
              <Image
                src="/resume-preview.png"
                alt="Résumé of Fatema Akhtar, Data Analyst, single page. The full text is available in the PDF linked above and is summarised below this image."
                width={1241}
                height={1754}
                sizes="(max-width: 900px) 100vw, 900px"
                quality={90}
              />
            </div>
            <p className="muted mt-24">
              Page preview. Open or download the PDF above for the selectable,
              searchable version.
            </p>
          </Reveal>

          {/* The preview is an image of text, so it is unreadable to screen
              readers and to text search. This is the accessible equivalent. */}
          <div className="sr-only">
            <h2>Résumé text alternative</h2>
            <p>
              Fatema Akhtar. Data Analytics, Business Intelligence, SQL, Power
              BI, Excel, Python. {PERSON.location}. Email {PERSON.email}.
            </p>
            <h3>Experience</h3>
            <ul>
              {EXPERIENCE.map((e) => (
                <li key={e.period}>
                  {e.role}, {e.org}. {e.period}. {e.body}
                </li>
              ))}
            </ul>
            <h3>Education</h3>
            <p>
              {EDUCATION.degree}, {EDUCATION.school}.
            </p>
            <p>
              For the complete résumé including project detail and the full
              skills list, open the PDF linked at the top of this page.
            </p>
          </div>
        </section>
      ) : null}

      {pdf && !preview ? (
        <section className="shell section--tight">
          <Reveal>
            <div className="note" style={{ padding: "clamp(20px,3vw,28px)" }}>
              <p>
                The PDF is live via the buttons above. To also show an inline
                page preview, add{" "}
                <code className="mono">/public/resume-preview.png</code>.
              </p>
            </div>
          </Reveal>
        </section>
      ) : null}

      {!pdf ? (
        <section className="shell section--tight">
          <Reveal>
            <div className="note" style={{ padding: "clamp(20px,3vw,28px)" }}>
              <p style={{ marginBottom: 10 }}>
                <b>Setup note (visible only until the PDF is added).</b>
              </p>
              <p>
                Drop the résumé into{" "}
                <code className="mono">/public/fatema-akhtar-resume.pdf</code>{" "}
                and this page automatically switches to an inline preview with
                working Open and Download buttons.
              </p>
            </div>
          </Reveal>
        </section>
      ) : null}
    </>
  );
}
