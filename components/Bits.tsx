export function SectionHead({
  eyebrow,
  title,
  count,
}: {
  eyebrow: string;
  title?: string;
  count?: string;
}) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      {title ? <span className="mono eyebrow">{title}</span> : null}
      {count ? <span className="section-head__count">{count}</span> : null}
    </div>
  );
}

export function Chain({ items }: { items: string[] }) {
  return (
    <div className="chain" role="list" aria-label="Analytical workflow">
      {items.map((n, i) => (
        <span key={n} style={{ display: "contents" }}>
          <span
            role="listitem"
            className={`chain__node${i === 0 ? " chain__node--first" : ""}${
              i === items.length - 1 ? " chain__node--last" : ""
            }`}
          >
            {n}
          </span>
          {i < items.length - 1 && (
            <span className="chain__sep" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
