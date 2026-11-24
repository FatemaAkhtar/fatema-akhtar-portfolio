import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Bits";
import styles from "./current-work.module.css";

export const metadata: Metadata = {
  title: "Current Work: CommerceIQ, Conversational BI & E-Commerce Analytics",
  description:
    "CommerceIQ is an independent conversational business intelligence and e-commerce analytics platform built with DuckDB, Parquet and AI-assisted SQL.",
  alternates: { canonical: "/current-work" },
  openGraph: {
    title: "Current Work: CommerceIQ",
    description:
      "Beyond analysis: an independent build that brings conversational AI to e-commerce analytics.",
    url: "/current-work",
    type: "article",
  },
};

type ProjectLink = {
  label: string;
  url: string;
  cta: string;
  primary?: boolean;
};

type Build = {
  id: string;
  name: string;
  subtitle: string;
  statement: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  story: string[];
  areas: { title: string; body: string }[];
  analyst: {
    heading: string;
    copy: string[];
    steps: string[];
  };
  tools: { title: string; note?: string; items: string[] }[];
  challenges: { heading: string; intro: string; paragraphs: string[] };
  limits: { heading: string; items: { title: string; body: string }[] };
  links: { heading: string; items: ProjectLink[] };
};

/* Each featured build carries its own content. Adding a future project means
   adding another record here; the page structure below stays the same. */
const BUILDS: Build[] = [
  {
    id: "commerceiq",
    name: "CommerceIQ",
    subtitle: "Conversational BI & E-Commerce Analytics Platform",
    statement:
      "Why stop at static charts when you can ask your data why something happened?",
    image: {
      src: "/dashboards/commerceiq/page%201.PNG",
      alt: "CommerceIQ dashboard interface for conversational business intelligence and e-commerce analytics",
      width: 1920,
      height: 827,
      caption:
        "CommerceIQ, shown across e-commerce performance views.",
    },
    story: [
      "Business teams often notice something unusual in their numbers, such as sales dipping, delivery delays increasing or inventory not moving as expected. Finding the reason can mean going through multiple reports, applying different filters or waiting for someone to write a SQL query.",
      "I started building CommerceIQ to explore a different approach.",
      "It brings together seven areas of e-commerce analytics with a conversational AI Analyst. Instead of relying only on dashboards, users can ask questions in plain English and explore the underlying data through AI-assisted SQL queries.",
      "The application uses a DuckDB and Parquet warehouse built around the TheLook E-Commerce dataset. The aim is to retrieve actual results from the data rather than generate answers based on assumptions.",
    ],
    areas: [
      {
        title: "Executive Analytics",
        body: "Explore key business performance indicators and overall e-commerce performance.",
      },
      {
        title: "Sales & Profitability",
        body: "Investigate revenue, profit, sales performance and trends.",
      },
      {
        title: "Customer Analytics",
        body: "Explore customer behaviour, segmentation, retention and purchasing patterns.",
      },
      {
        title: "Marketing & Behaviour",
        body: "Understand traffic, sessions, engagement and conversion patterns.",
      },
      {
        title: "Product & Inventory",
        body: "Analyse product performance, inventory levels and unsold stock.",
      },
      {
        title: "Fulfilment & Returns",
        body: "Explore fulfilment performance, delivery and return-related metrics.",
      },
      {
        title: "Data Quality",
        body: "Review data completeness, consistency and warehouse quality.",
      },
    ],
    analyst: {
      heading: "The AI Analyst – Ask your data a question.",
      copy: [
        "One of the main things I wanted to explore was whether business users could investigate their data without having to write SQL themselves.",
        "The AI Analyst allows users to ask questions in natural language. The application uses AI-assisted SQL generation and validation, executes queries against the DuckDB warehouse and presents an explanation of the results.",
        "The intention is to make business analysis more conversational while keeping the answers connected to the underlying data.",
      ],
      steps: [
        "Business question",
        "AI interpretation",
        "SQL generation and validation",
        "DuckDB query execution",
        "Results and explanation",
      ],
    },
    tools: [
      {
        title: "Application development",
        items: ["Python", "FastAPI", "React", "TypeScript", "Vite"],
      },
      {
        title: "Data and analytics",
        items: ["DuckDB", "SQL", "Parquet", "TheLook E-Commerce synthetic dataset"],
      },
      {
        title: "AI platforms explored",
        note:
          "Google Gemini is the provider currently configured in the deployed application. Groq and Cloudflare Workers AI were explored during development.",
        items: [
          "Google Gemini, the configured provider",
          "Groq, explored during development",
          "Cloudflare Workers AI, explored during development",
        ],
      },
      {
        title: "AI-assisted development tools explored",
        note:
          "These are tools I used while building CommerceIQ, not technologies inside the application.",
        items: ["Cursor", "Google Antigravity", "OpenCode", "Codex"],
      },
      {
        title: "Deployment",
        items: ["Vercel – frontend", "Render – backend"],
      },
    ],
    challenges: {
      heading: "Building it was one thing. Getting the answers right was another.",
      intro:
        "Getting the application running was only one part of the work. Making sure the numbers and answers could be trusted has been an ongoing challenge.",
      paragraphs: [
        "Early work went into the Text-to-SQL layer: improving accuracy and question coverage, and checking whether a generated query actually answers the business question that was asked. A fluent answer is not the same as the right query, so that validation remains part of the work.",
        "On the analytics side, I have had to keep KPI definitions consistent across dashboards, validate how date filters behave, and investigate where two metrics that should agree produce different numbers. Those differences are often where the real data-model question sits.",
        "On the application side, there has been work on responsiveness and the first-load experience, along with API integration, Python compatibility and deployment issues. None of that is finished for good. Accuracy, coverage and performance are still being improved as I use the application and find new edge cases.",
      ],
    },
    limits: {
      heading: "A few things worth knowing",
      items: [
        {
          title: "Initial loading time",
          body: "The first visit may take around 30 to 60 seconds to load. The backend runs on Render's free plan and may go to sleep when nobody is using the application. It needs a little time to start again.",
        },
        {
          title: "Dataset",
          body: "CommerceIQ uses the TheLook E-Commerce synthetic dataset. The figures are intended for demonstration and learning, not actual business performance.",
        },
        {
          title: "AI Analyst",
          body: "The AI Analyst is still being improved. Some questions may not return the expected results, so there is more work to do on accuracy and question coverage.",
        },
        {
          title: "Project status",
          body: "CommerceIQ is an independent, ongoing project. Analytics, accuracy and performance continue to evolve.",
        },
      ],
    },
    links: {
      heading: "Explore the project",
      items: [
        {
          label: "Live application",
          url: "https://commerce-iq-tau.vercel.app",
          cta: "Open the live application",
          primary: true,
        },
        {
          label: "GitHub repository",
          url: "https://github.com/FatemaAkhtar/CommerceIQ",
          cta: "View the code on GitHub",
        },
      ],
    },
  },
];

export default function CurrentWorkPage() {
  return (
    <>
      <section className="shell cs-hero" aria-labelledby="current-work-intro">
        <Reveal>
          <p className="eyebrow eyebrow--accent">Current work</p>
          <h1 id="current-work-intro" className="cs-hero__title">
            Beyond analysis. Building practical solutions.
          </h1>
          <div className={styles.intro}>
            <p>
              Most of my work has been around understanding business problems
              through data. Over time, I&rsquo;ve also become interested in what
              happens beyond analysis. That means building tools, exploring new
              technologies and finding practical ways to make information easier
              to work with.
            </p>
            <p>
              This is where I share some of the things I&rsquo;m currently
              building and exploring.
            </p>
          </div>
        </Reveal>
      </section>

      {BUILDS.map((build, index) => (
        <Fragment key={build.id}>
          <section
            className="shell section--tight"
            aria-labelledby={`${build.id}-project`}
          >
            <SectionHead eyebrow="Featured build" count={`0${index + 1}`} />
            <h2
              id={`${build.id}-project`}
              className={styles.projectTitle}
            >
              {build.name}
            </h2>
            <p className={styles.projectSub}>{build.subtitle}</p>

            <Reveal>
              <div className="cs-q" style={{ marginTop: 28 }}>
                <b>The question</b>
                <p>{build.statement}</p>
              </div>
            </Reveal>

            <Reveal>
              <figure className={styles.shot}>
                <Image
                  src={build.image.src}
                  alt={build.image.alt}
                  width={build.image.width}
                  height={build.image.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1180px) 92vw, 1100px"
                  priority
                />
                <figcaption>{build.image.caption}</figcaption>
              </figure>
            </Reveal>

            <div className={styles.story}>
              {build.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            className="shell section rule-top"
            aria-labelledby={`${build.id}-areas`}
          >
            <SectionHead eyebrow="Overview" count={`0${build.areas.length}`} />
            <h2 id={`${build.id}-areas`} className={styles.sectionTitle}>
              What {build.name} does
            </h2>
            <ol className={styles.areaGrid}>
              {build.areas.map((area, i) => (
                <li key={area.title} className={styles.area}>
                  <span className={styles.areaN}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.areaTitle}>{area.title}</h3>
                  <p className={styles.areaBody}>{area.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            className={`section ${styles.analyst}`}
            aria-labelledby={`${build.id}-analyst`}
          >
            <div className="shell">
              <p className={`eyebrow ${styles.analystEyebrow}`}>
                The differentiator
              </p>
              <h2
                id={`${build.id}-analyst`}
                className={styles.analystTitle}
              >
                {build.analyst.heading}
              </h2>
              <div className={styles.analystCopy}>
                {build.analyst.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ol className={styles.flow} aria-label="AI Analyst workflow">
                {build.analyst.steps.map((step, i) => (
                  <li key={step} className={styles.flowStep}>
                    <span className={styles.flowN}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.flowT}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="shell section"
            aria-labelledby={`${build.id}-tools`}
          >
            <SectionHead eyebrow="Under the hood" />
            <h2 id={`${build.id}-tools`} className={styles.sectionTitle}>
              Technology and AI tools explored
            </h2>
            <div className="skills">
              {build.tools.map((group) => (
                <div key={group.title} className="skills__g">
                  <h3 className="skills__h">{group.title}</h3>
                  {group.note ? (
                    <p className={styles.groupNote}>{group.note}</p>
                  ) : null}
                  <ul className="skills__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            className="shell section rule-top"
            aria-labelledby={`${build.id}-challenges`}
          >
            <SectionHead eyebrow="The work behind it" />
            <h2
              id={`${build.id}-challenges`}
              className={styles.sectionTitle}
            >
              {build.challenges.heading}
            </h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              {build.challenges.intro}
            </p>
            <div className={styles.challenges}>
              {build.challenges.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            className="shell section"
            aria-labelledby={`${build.id}-limits`}
          >
            <SectionHead eyebrow="Limitations" count="04" />
            <h2 id={`${build.id}-limits`} className={styles.sectionTitle}>
              {build.limits.heading}
            </h2>
            <div className="entries entries--stack">
              {build.limits.items.map((item) => (
                <div key={item.title} className="entry">
                  <h3 className="entry__t">{item.title}</h3>
                  <p className="entry__b">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="shell section--tight rule-top"
            aria-labelledby={`${build.id}-links`}
          >
            <SectionHead eyebrow="Project links" count="02" />
            <h2 id={`${build.id}-links`} className={styles.sectionTitle}>
              {build.links.heading}
            </h2>
            <div className={styles.linkRows}>
              {build.links.items.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.primary ? "btn" : "btn btn--ghost"}
                >
                  {link.cta} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className={styles.linkList}>
              {build.links.items.map((link) => (
                <span key={link.url}>
                  {link.label}:{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.url}
                  </a>
                </span>
              ))}
            </div>
          </section>
        </Fragment>
      ))}
    </>
  );
}
