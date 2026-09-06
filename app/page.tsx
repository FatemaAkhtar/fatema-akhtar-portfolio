import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SectionHead, Chain } from "@/components/Bits";
import ProjectCard from "@/components/ProjectCard";
import {
  PERSON,
  PROOF,
  SOLVES,
  PROCESS,
  CHAIN,
  FEATURED,
  ADDITIONAL,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="shell hero" aria-labelledby="hero-statement">
        <div className="hero__grid">
        <Reveal className="ha-id">
          <div className="hero__id">
            <h1 className="hero__name">{PERSON.name}</h1>
            <p className="hero__title">Data Analyst</p>
            <p className="hero__kit">
              {PERSON.tools.map((t, i) => (
                <span key={t}>
                  {i > 0 ? <i aria-hidden="true">·</i> : null}
                  {t}
                </span>
              ))}
            </p>
            <p className="hero__domains">
              {PERSON.domains.map((d, i) => (
                <span key={d}>
                  {i > 0 ? <i aria-hidden="true">·</i> : null}
                  {d}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal className="ha-fig" delay={60}>
          <div className="portrait">
            <Image
              src="/portrait-hero.jpg"
              alt="Portrait of Fatema Akhtar"
              width={900}
              height={1125}
              sizes="(max-width: 900px) 200px, 360px"
              quality={88}
              priority
            />
          </div>
        </Reveal>

        <Reveal className="ha-st" delay={70}>
          <p className="hero__statement" id="hero-statement">
            I don&rsquo;t start with the dashboard.
            <em>I start with the problem.</em>
          </p>
        </Reveal>

        <Reveal className="ha-sup" delay={130}>
          <p className="hero__support">
            I take business and operational problems apart: checking whether
            the data holds up, finding which segment is actually driving the
            number, and explaining what it means.
          </p>
        </Reveal>

        <Reveal className="ha-cta" delay={180}>
          <div className="hero__actions">
            <Link href="/work" className="btn">
              View my work
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/resume" className="btn btn--ghost">
              Résumé
            </Link>
          </div>
          <div className="hero__links">
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u"
            >
              LinkedIn
            </a>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u"
            >
              GitHub
            </a>
            <a href={`mailto:${PERSON.email}`} className="link-u">
              {PERSON.email}
            </a>
          </div>
        </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------- PROOF STRIP */}
      <section className="proof" aria-label="Scale of work">
        <div className="shell">
          <div className="proof__grid">
            {PROOF.map((p, i) => (
              <Reveal key={p.label} delay={i * 60} className="proof__item">
                <div className="proof__v">{p.value}</div>
                <div className="proof__l">{p.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- PHILOSOPHY */}
      <section className="shell section" aria-labelledby="approach">
        <SectionHead eyebrow="Approach" count="Question → Action" />
        <div className="philosophy">
          <Reveal>
            <h2 className="h2" id="approach">
              A dashboard is the last step, not the first.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="stack gap-20">
              <p className="body">
                I work with data to understand what is happening, why it is
                happening, and what the business can do about it. Most of the
                work sits before the chart: deciding what question is actually
                being asked, and checking whether the data can support an answer
                to it.
              </p>
              <p className="body" style={{ fontSize: "var(--step-small)" }}>
                Every project on this site follows the sequence below. The case
                studies are written in the same order, so you can read the
                reasoning rather than just the output.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="chain-band">
            <Chain items={CHAIN} />
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------- WHAT I SOLVE */}
      <section className="shell section rule-top" aria-labelledby="solve">
        <SectionHead eyebrow="What I solve" count="06 problem types" />
        <h2 className="h2" id="solve" style={{ maxWidth: "20ch", marginBottom: "clamp(28px,4vw,44px)" }}>
          The kinds of problems I get asked to look into.
        </h2>
        <div className="solve">
          {SOLVES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60} className="solve__item">
              <span className="solve__n">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="solve__t">{s.title}</h3>
              <p className="solve__b">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- SELECTED WORK */}
      <section className="shell section rule-top" aria-labelledby="work">
        <SectionHead eyebrow="Problems I've worked on" count="Selected · 03" />
        <h2 className="h2" id="work" style={{ maxWidth: "22ch", marginBottom: "clamp(28px,4vw,44px)" }}>
          Three investigations, written up the way I worked through them.
        </h2>

        <div className="projects">
          {FEATURED.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="row mt-40">
          <Link href="/work" className="btn btn--ghost">
            All work, including additional projects
            <span aria-hidden="true">→</span>
          </Link>
          <span className="mono eyebrow">
            Also: {ADDITIONAL.map((a) => a.shortTitle).join(", ")}
          </span>
        </div>
      </section>

      {/* --------------------------------------------------- HOW I WORK */}
      <section className="shell section rule-top" aria-labelledby="process">
        <SectionHead eyebrow="How I work" count="06 steps" />
        <h2 className="h2" id="process" style={{ maxWidth: "24ch", marginBottom: "clamp(28px,4vw,48px)" }}>
          The same sequence, whatever the domain.
        </h2>
        <ol className="process">
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={i * 50} as="li" className="process__step">
              <span className="process__n">{s.n}</span>
              <h3 className="process__t">{s.title}</h3>
              <p className="process__b">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mono eyebrow mt-40" style={{ maxWidth: "70ch", lineHeight: 1.7 }}>
          Note: recommendations in these projects are analytical next steps.
          Where business impact has not been measured, it is not claimed.
        </p>
      </section>

      {/* -------------------------------------------------------- BAND */}
      <section className="band" aria-labelledby="cta">
        <div className="shell section--tight">
          <p className="eyebrow">Next step</p>
          <h2
            className="h2"
            id="cta"
            style={{ maxWidth: "18ch", marginBlock: "16px 18px" }}
          >
            Start with the logistics case study.
          </h2>
          <p style={{ maxWidth: "56ch", marginBottom: 28 }}>
            5.87M+ transactions, 970K+ delayed shipments, and the segmentation
            work that turns a delay rate into something an operations team can
            act on.
          </p>
          <Link href="/work/logistics-analytics" className="btn">
            Read the case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
