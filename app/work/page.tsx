import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Bits";
import ProjectCard from "@/components/ProjectCard";
import ExtraCard from "@/components/ExtraCard";
import { FEATURED, ADDITIONAL, EXTRA, REPOS, PERSON } from "@/lib/content";
import { resolvePreview } from "@/lib/evidence";

export const metadata: Metadata = {
  title: "Work: Analytical case studies",
  description:
    "Case studies across supply chain and operations, financial risk, and business analytics, written problem-first.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="shell cs-hero">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h1 className="cs-hero__title">
            Problems I&rsquo;ve investigated.
          </h1>
          <p className="cs-hero__sub">
            Each case study is written in the order the work happened: the
            question first, the data quality second, the finding after that.
            None of them lead with the tooling.
          </p>
        </Reveal>
      </section>

      <section className="shell section--tight" aria-labelledby="selected">
        <SectionHead eyebrow="Selected work" count="03" />
        <h2 id="selected" className="h2" style={{ position: "absolute", left: -9999 }}>
          Selected work
        </h2>
        <div className="projects">
          {FEATURED.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              shot={resolvePreview(p.shotDir, p.preview?.file)}
            />
          ))}
        </div>
      </section>

      <section className="shell section" aria-labelledby="additional">
        <SectionHead eyebrow="Additional work" count={`0${ADDITIONAL.length + EXTRA.length}`} />
        <h2 id="additional" className="h2" style={{ position: "absolute", left: -9999 }}>
          Additional work
        </h2>
        <div className="projects">
          {ADDITIONAL.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              shot={resolvePreview(p.shotDir, p.preview?.file)}
              subdued
            />
          ))}
          {EXTRA.map((e) => (
            <ExtraCard
              key={e.github}
              project={e}
              shot={
                e.preview
                  ? resolvePreview(e.preview.dir, e.preview.file)
                  : null
              }
            />
          ))}
        </div>
      </section>

      <section className="shell section rule-top" aria-labelledby="code">
        <SectionHead eyebrow="Code & work" count={`0${REPOS.length} repositories`} />
        <h2 className="h2" id="code" style={{ maxWidth: "20ch", marginBottom: 28 }}>
          The code behind the analysis.
        </h2>
        <div className="repos">
          {REPOS.map((r) => (
            <a
              key={r.name}
              className="repo"
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{r.name}</b>
              <span>{r.desc}</span>
              <i>View repository →</i>
            </a>
          ))}
        </div>
        <div className="row mt-24">
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            github.com/FatemaAkhtar <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="band">
        <div className="shell section--tight">
          <p className="eyebrow">Contact</p>
          <h2 className="h2" style={{ maxWidth: "16ch", marginBlock: "16px 24px" }}>
            Let&rsquo;s talk about data.
          </h2>
          <Link href="/contact" className="btn">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
