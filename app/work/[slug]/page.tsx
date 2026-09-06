import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import EvidenceGallery from "@/components/EvidenceGallery";
import ProjectChart from "@/components/ProjectChart";
import { PROJECTS, getProject, SITE_URL } from "@/lib/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.question} ${p.subtitle}`,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.title} | Fatema Akhtar`,
      description: p.question,
      url: `${SITE_URL}/work/${p.slug}`,
      type: "article",
    },
  };
}

/* Case-study section wrapper: sticky lettered label + body */
function Block({
  id,
  letter,
  label,
  children,
}: {
  id: string;
  letter: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cs-block" aria-labelledby={id}>
      <div className="cs-block__label">
        <i>{letter}</i>
        <h2 id={id}>{label}</h2>
      </div>
      <Reveal className="cs-block__body">{children}</Reveal>
    </section>
  );
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      {/* ------------------------------------------------------- HEADER */}
      <article>
        <header className="shell cs-hero">
          <Reveal>
            <p className="eyebrow">
              <Link href="/work" className="link-u">
                Work
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;Project {p.index}
            </p>
            <h1 className="cs-hero__title">{p.title}</h1>
            <p className="cs-hero__sub">{p.subtitle}</p>
          </Reveal>

          <Reveal delay={70}>
            <div className="cs-q">
              <b>The question</b>
              <p>{p.question}</p>
            </div>
          </Reveal>

          <div className="cs-meta">
            <div>
              <b>Domain</b>
              {p.domain}
            </div>
            <div>
              <b>Stack</b>
              {p.tools.join(" · ")}
            </div>
            <div>
              <b>Code</b>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u"
              >
                GitHub repository ↗
              </a>
            </div>
          </div>
        </header>

        <div className="shell">
          {/* ------------------------------------------------- A PROBLEM */}
          <Block id="b-problem" letter="A" label="The problem">
            {p.problem.map((t, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>
                {t}
              </p>
            ))}
          </Block>

          {/* --------------------------------------------------- B SCALE */}
          <Block id="b-scale" letter="B" label="The scale">
            <div className="scale-grid">
              {p.scale.map((s) => (
                <div key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            {p.scaleNote ? <p className="note">{p.scaleNote}</p> : null}
            {p.chart ? <ProjectChart kind={p.chart} /> : null}
          </Block>

          {/* ---------------------------------------------------- C DATA */}
          <Block id="b-data" letter="C" label="The data">
            <ul className="dot-list">
              {p.data.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Block>

          {/* ------------------------------------------------- D QUALITY */}
          <Block id="b-quality" letter="D" label="Data quality">
            <p>
              Nothing below is a formality. At this row count, an unchecked
              field does not produce an obvious error. It produces a confident
              number that happens to be wrong.
            </p>
            <div className="qsteps">
              {p.quality.map((q) => (
                <div className="qstep" key={q.step}>
                  <b>{q.step}</b>
                  <p>{q.body}</p>
                </div>
              ))}
            </div>
          </Block>

          {/* ------------------------------------------------ E ANALYSIS */}
          <Block id="b-analysis" letter="E" label="The analysis">
            <p>What I investigated, and why each cut was worth making:</p>
            <ul className="dot-list">
              {p.analysis.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Block>

          {/* ------------------------------------------------ F FINDINGS */}
          <Block id="b-findings" letter="F" label="What I found">
            <div className="stack gap-20">
              {p.findings.map((f) => (
                <div className="finding" key={f.head}>
                  <h3>{f.head}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Block>

          {/* ------------------------------------------------- G MATTERS */}
          <Block id="b-matters" letter="G" label="Why it matters">
            <ul className="dot-list">
              {p.matters.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Block>

          {/* ---------------------------------------------------- H NEXT */}
          <Block id="b-next" letter="H" label="What I'd do next">
            <p>
              These are analytical next steps, not claimed outcomes. Where
              impact has not been measured, it is not asserted.
            </p>
            <ol className="num-list">
              {p.next.map((n) => (
                <li key={n}>
                  <span>{n}</span>
                </li>
              ))}
            </ol>
          </Block>

          {/* --------------------------------------------------- I TOOLS */}
          <Block id="b-tools" letter="I" label="Tools">
            <div className="tool-rows">
              {p.toolsDetail.map((t) => (
                <div className="tool-row" key={t.group}>
                  <b>{t.group}</b>
                  <span>{t.items}</span>
                </div>
              ))}
            </div>
          </Block>

          {/* ------------------------------------------------ J EVIDENCE */}
          <Block id="b-evidence" letter="J" label="Evidence">
            <p>
              Each visual below is here to answer a specific question. The
              caption says what to look at.
            </p>
            <EvidenceGallery project={p} />
            <div className="deep">
              <div>
                <p className="eyebrow eyebrow--accent">Go deeper</p>
                <h3 className="deep__h">
                  The full working is in the repository.
                </h3>
                <p className="deep__b">{p.deepDive}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Explore in detail
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Block>
        </div>
      </article>

      {/* --------------------------------------------------------- NEXT */}
      <section className="shell section rule-top" aria-labelledby="next-project">
        <p className="eyebrow">Next project</p>
        <h2 className="h2" id="next-project" style={{ maxWidth: "20ch", marginBlock: "14px 12px" }}>
          <Link href={`/work/${next.slug}`} className="link-u">
            {next.shortTitle}
          </Link>
        </h2>
        <p className="body" style={{ maxWidth: "52ch" }}>
          {next.question}
        </p>
        <div className="row mt-24">
          <Link href={`/work/${next.slug}`} className="btn">
            Read case study <span aria-hidden="true">→</span>
          </Link>
          <Link href="/work" className="btn btn--ghost">
            All work
          </Link>
        </div>
      </section>
    </>
  );
}
