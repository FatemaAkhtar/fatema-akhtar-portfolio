import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Bits";
import {
  PERSON,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CREDENTIALS,
  BEYOND,
  JOURNEY,
  PROJECTS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fatema Akhtar, Data Analyst in Mumbai working across business analytics, supply chain and operations, and financial risk. B.Sc. IT, University of Mumbai.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="shell cs-hero">
        <div className="intro">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="cs-hero__title">
              I like working on problems where the answer isn&rsquo;t obvious.
            </h1>
            <p className="cs-hero__sub">
              Data Analyst in {PERSON.location.replace(", India", "")}, working
              across business analytics, supply chain and operations, and
              financial risk.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="portrait">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Fatema Akhtar"
                width={1000}
                height={1000}
                sizes="(max-width: 760px) 220px, 300px"
                quality={88}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell section--tight">
        <div className="philosophy">
          <Reveal>
            <div className="stack gap-20">
              <p className="lead">
                A number on its own rarely explains much. I want to know which
                part of the data is producing it.
              </p>
              <p className="body">
                Most of my work has been on large operational and financial
                datasets: 5.87M+ logistics transactions, 500K+ mortgage
                records, 196K+ startup records. At that size the interesting
                part is rarely the headline number. It is finding out which
                segments the number is actually being driven by, and whether the
                data is clean enough for that answer to hold.
              </p>
              <p className="body">
                Day to day that means SQL, Power BI, Python and Excel, across
                business analytics, supply chain and operations, financial risk,
                data quality work, and machine learning used as an analytical
                tool rather than a product.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="note" style={{ padding: "clamp(22px,3vw,30px)" }}>
              <p
                style={{
                  fontSize: "var(--step-lead)",
                  lineHeight: 1.5,
                  letterSpacing: "-0.016em",
                  color: "var(--ink)",
                }}
              >
                I care about the part of analytics that happens before the chart:
                understanding the question, checking whether the data can
                actually support the answer, investigating the patterns, and
                explaining the result so someone else can use it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------- MY JOURNEY */}
      <section className="shell section rule-top" aria-labelledby="journey">
        <SectionHead eyebrow="My journey" count={`${JOURNEY.length} milestones`} />
        <h2 className="h2" id="journey" style={{ maxWidth: "20ch", marginBottom: 30 }}>
          How the analytics came together.
        </h2>
        <ol className="journey">
          {JOURNEY.map((j) => (
            <li className="jstep" key={j.title + (j.when ?? "")}>
              <div className="jstep__rail">
                <p className="jstep__when">{j.when}</p>
                <p className="jstep__k">{j.kind}</p>
              </div>
              <div className="jstep__main">
                <h3 className="jstep__t">{j.title}</h3>
                <p className="jstep__o">{j.org}</p>
                {j.note ? (
                  <p className={j.noteStrong ? "jstep__n jstep__n--big" : "jstep__n"}>
                    {j.note}
                  </p>
                ) : null}
                {j.body ? <p className="jstep__b">{j.body}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------- EXPERIENCE */}
      <section className="shell section" aria-labelledby="experience">
        <SectionHead eyebrow="Experience" count="Mumbai, India" />
        <h2 className="h2" id="experience" style={{ maxWidth: "20ch", marginBottom: 26 }}>
          Where I&rsquo;ve worked, and what came out of it.
        </h2>
        <dl className="entries">
          {EXPERIENCE.map((e) => {
            const made = (e.projects ?? [])
              .map((slug) => PROJECTS.find((p) => p.slug === slug))
              .filter(Boolean);
            return (
              <div className="entry" key={e.period}>
                <dt className="entry__t">
                  {e.role} <span className="entry__sep">·</span> {e.org}
                </dt>
                <dd className="entry__m">{e.period}</dd>
                {made.length ? (
                  <dd className="entry__b entry__links">
                    <span className="entry__lab">Case studies</span>
                    {made.map((p) => (
                      <Link key={p!.slug} href={`/work/${p!.slug}`} className="link-u">
                        {p!.shortTitle}
                      </Link>
                    ))}
                  </dd>
                ) : null}
              </div>
            );
          })}
        </dl>
      </section>

      {/* ---------------------------------------------------- EDUCATION */}
      <section className="shell section rule-top" aria-labelledby="education">
        <SectionHead eyebrow="Education" />
        <h2 className="h2" id="education" style={{ maxWidth: "20ch", marginBottom: 26 }}>
          {EDUCATION.degree}
        </h2>
        <p className="lead" style={{ marginBottom: 4 }}>{EDUCATION.school}</p>
        <dl className="facts">
          <div>
            <dt>CGPA</dt>
            <dd>{EDUCATION.cgpa}</dd>
          </div>
          <div>
            <dt>Completed</dt>
            <dd>{EDUCATION.completed}</dd>
          </div>
        </dl>
      </section>

      {/* -------------------------------------- CERTIFICATIONS & TRAINING */}
      <section className="shell section" aria-labelledby="training">
        <SectionHead eyebrow="Certifications & training" />
        <h2 className="h2" id="training" style={{ maxWidth: "22ch", marginBottom: 26 }}>
          Formal analytics training.
        </h2>
        <dl className="entries entries--stack entries--strong">
          {CREDENTIALS.map((c) => (
            <div className="entry" key={c.title}>
              <dt className="entry__t">{c.title}</dt>
              <dd className="entry__m">{c.meta}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------ UNIVERSITY & COMMUNITY */}
      <section className="shell section rule-top" aria-labelledby="community">
        <SectionHead eyebrow="University & community" />
        <h2 className="h2" id="community" style={{ maxWidth: "22ch", marginBottom: 26 }}>
          Work outside the datasets.
        </h2>
        <dl className="entries entries--stack">
          {BEYOND.map((e) => (
            <div className="entry" key={e.title}>
              <dt className="entry__t">{e.title}</dt>
              <dd className="entry__m">{e.meta}</dd>
              <dd className="entry__b">{e.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* -------------------------------------------------- CAPABILITIES */}
      <section className="shell section rule-top" aria-labelledby="skills">
        <SectionHead eyebrow="Capabilities" count={`${SKILLS.length} categories`} />
        <h2 className="h2" id="skills" style={{ maxWidth: "24ch", marginBottom: 14 }}>
          Tools change. The foundations don&rsquo;t.
        </h2>
        <p className="body" style={{ maxWidth: "62ch", marginBottom: 28 }}>
          There will always be another platform. I would rather be solid on
          SQL, statistics, data quality and business context, and pick up the
          tool when the problem calls for it.
        </p>
        <div className="skills">
          {SKILLS.map((g) => (
            <div className="skills__g" key={g.group}>
              <h3 className="skills__h">{g.group}</h3>
              {g.note ? <p className="skills__note">{g.note}</p> : null}
              <ul className="skills__list">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mono eyebrow mt-24" style={{ maxWidth: "66ch", lineHeight: 1.7 }}>
          Cloud is listed as foundational knowledge, not production experience.
          AI tools help me work faster; they don&rsquo;t do the analysis, and I
          don&rsquo;t work as an AI or ML specialist. Anything not listed here is
          something I haven&rsquo;t worked with.
        </p>
      </section>

      {/* ----------------------------------------------- THINKING IN PUBLIC */}
      <section className="shell section rule-top" aria-labelledby="public">
        <SectionHead eyebrow="Thinking in public" />
        <div className="philosophy">
          <Reveal>
            <h2 className="h2" id="public" style={{ maxWidth: "18ch" }}>
              I write about the work as I do it.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <div className="stack gap-28">
              <p className="body">
                I regularly share what I&rsquo;m learning, building and thinking
                about analytics on LinkedIn: SQL and Power BI work, how I
                approach a problem, and observations from the projects on this
                site.
              </p>
              <div className="row">
                <a
                  href={PERSON.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Follow my work on LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
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
