import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PERSON } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fatema Akhtar, Data Analyst based in Mumbai, India. Email, LinkedIn and GitHub.",
  alternates: { canonical: "/contact" },
};

const ROWS = [
  { k: "Email", v: PERSON.email, href: `mailto:${PERSON.email}`, ext: false },
  {
    k: "LinkedIn",
    v: "linkedin.com/in/fatema-akhtar",
    href: PERSON.linkedin,
    ext: true,
  },
  { k: "GitHub", v: "github.com/FatemaAkhtar", href: PERSON.github, ext: true },
];

export default function ContactPage() {
  return (
    <>
      <section className="shell cs-hero">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="cs-hero__title">Let&rsquo;s talk about data.</h1>
          <p className="cs-hero__sub">
            Interested in discussing an analytics problem, an opportunity, or
            simply exchanging ideas?
          </p>
        </Reveal>
      </section>

      <section className="shell section--tight">
        <Reveal>
          <div className="contact-rows">
            {ROWS.map((r) => (
              <a
                key={r.k}
                className="crow"
                href={r.href}
                {...(r.ext
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="crow__k">{r.k}</span>
                <span className="crow__v">{r.v}</span>
                <span className="crow__a" aria-hidden="true">
                  {r.ext ? "↗" : "→"}
                </span>
              </a>
            ))}
            <Link className="crow" href="/resume">
              <span className="crow__k">Résumé</span>
              <span className="crow__v">View or download the résumé</span>
              <span className="crow__a" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="row mt-40" style={{ gap: 40 }}>
            <div>
              <p className="eyebrow">Based in</p>
              <p style={{ marginTop: 6 }}>Mumbai, India</p>
            </div>
            <div>
              <p className="eyebrow">Working in</p>
              <p style={{ marginTop: 6 }}>
                Business Analytics · Supply Chain & Operations · Financial Risk
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell section">
        <div className="row">
          <Link href="/work" className="btn btn--ghost">
            See the work first <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
