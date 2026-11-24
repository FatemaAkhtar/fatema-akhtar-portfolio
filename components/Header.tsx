"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PERSON } from "@/lib/content";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/current-work", label: "Current Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="hdr">
      <div className="shell hdr__in">
        <Link href="/" className="hdr__brand" aria-label="Fatema Akhtar, home">
          <b>{PERSON.name}</b>
          <span>Data Analyst</span>
        </Link>

        <nav className="hdr__nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hdr__link"
              aria-current={isCurrent(n.href) ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/resume" className="btn btn--ghost hdr__cta">
            Résumé
          </Link>
        </nav>

        <button
          className="hdr__burger"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <i aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`shell hdr__mobile${open ? " is-open" : ""}`}
        aria-label="Mobile"
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={isCurrent(n.href) ? "page" : undefined}
          >
            {n.label}
          </Link>
        ))}
        <Link href="/resume">Résumé</Link>
      </nav>
    </header>
  );
}
