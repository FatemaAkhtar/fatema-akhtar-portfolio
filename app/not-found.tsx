import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell cs-hero">
      <p className="eyebrow">404</p>
      <h1 className="cs-hero__title">That page doesn&rsquo;t exist.</h1>
      <p className="cs-hero__sub">
        The work is the best place to start.
      </p>
      <div className="row mt-40">
        <Link href="/work" className="btn">
          View the work <span aria-hidden="true">→</span>
        </Link>
        <Link href="/" className="btn btn--ghost">
          Home
        </Link>
      </div>
    </section>
  );
}
