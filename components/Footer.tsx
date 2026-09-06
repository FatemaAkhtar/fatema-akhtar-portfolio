import Link from "next/link";
import { PERSON } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr__in">
          <div>
            <div className="ftr__name">{PERSON.name}</div>
            <div className="ftr__tag">
              Data Analyst · Mumbai, India
            </div>
          </div>
          <nav className="ftr__links" aria-label="Footer">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Résumé</Link>
            <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${PERSON.email}`}>Email</a>
          </nav>
          <div className="ftr__meta">
            <span>SQL · Power BI · Python · Excel</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
