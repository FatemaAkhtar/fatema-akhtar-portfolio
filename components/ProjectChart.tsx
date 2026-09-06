/**
 * Restrained, business-oriented visuals built only from figures that appear
 * in the case study itself. Each one answers a single question. Nothing here
 * exists because a chart looked good.
 */

type Part = { label: string; value: number; display: string; accent?: boolean };

function ProportionBar({
  question,
  parts,
  total,
  footnote,
}: {
  question: string;
  parts: Part[];
  total: number;
  footnote: string;
}) {
  let offset = 0;
  const segs = parts.map((p) => {
    const x = (offset / total) * 100;
    const w = (p.value / total) * 100;
    offset += p.value;
    return { ...p, x, w };
  });

  return (
    <div className="viz">
      <p className="viz__q">{question}</p>
      <svg
        className="viz__svg"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        role="img"
        aria-label={`${question} ${segs.map((s) => `${s.label}: ${s.display}`).join(". ")}`}
      >
        {segs.map((s) => (
          <rect
            key={s.label}
            x={s.x}
            y={0}
            width={Math.max(s.w, 0.4)}
            height={8}
            fill={s.accent ? "var(--accent)" : "var(--rule-strong)"}
          />
        ))}
      </svg>
      <ul className="viz__key">
        {segs.map((s) => (
          <li key={s.label}>
            <i aria-hidden="true" data-accent={s.accent ? "true" : undefined} />
            <b>{s.display}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
      <p className="viz__note">{footnote}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Paired ranking: two views of the same data, side by side.          */
/* ------------------------------------------------------------------ */

type Bar = { label: string; value: number; display: string; on?: boolean };
type Panel = { heading: string; sub: string; bars: Bar[] };

function PairedRanking({
  question,
  left,
  right,
  footnote,
  sharedMax = false,
  describe,
}: {
  question: string;
  left: Panel;
  right: Panel;
  footnote: string;
  sharedMax?: boolean;
  describe: string;
}) {
  const globalMax = Math.max(
    ...left.bars.map((b) => b.value),
    ...right.bars.map((b) => b.value)
  );

  const Col = ({ panel }: { panel: Panel }) => {
    const max = sharedMax ? globalMax : Math.max(...panel.bars.map((b) => b.value));
    return (
      <div className="rank">
        <h3 className="rank__h">{panel.heading}</h3>
        <p className="rank__sub">{panel.sub}</p>
        <ul className="rank__list">
          {panel.bars.map((b) => (
            <li key={b.label} className="rank__row" data-on={b.on || undefined}>
              <span className="rank__city">{b.label}</span>
              <span className="rank__track">
                <span
                  className="rank__bar"
                  style={{ width: `${Math.max((b.value / max) * 100, 1.5)}%` }}
                />
              </span>
              <span className="rank__val">{b.display}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="viz">
      <p className="viz__q">{question}</p>
      <div className="rank-grid" role="img" aria-label={describe}>
        <Col panel={left} />
        <Col panel={right} />
      </div>
      <p className="viz__note">{footnote}</p>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Strip plot: showing that a distribution is TIGHT is hard with bars. */
/* ------------------------------------------------------------------ */

function AgentStrip() {
  const agents = [
    { n: "Diane", v: 79.1 },
    { n: "Greg", v: 80.4 },
    { n: "Jim", v: 80.5 },
    { n: "Martha", v: 80.6 },
    { n: "Joe", v: 81.6 },
    { n: "Becky", v: 81.9 },
    { n: "Stewart", v: 82.0 },
    { n: "Dan", v: 82.6 },
  ];
  const LO = 70;
  const HI = 85;
  const x = (v: number) => 34 + ((v - LO) / (HI - LO)) * 336;
  const overall = 74.1;
  const bandL = x(79.1);
  const bandR = x(82.6);

  return (
    <div className="viz">
      <p className="viz__q">
        The dashboard asks which agents are driving the performance gap. Are
        they?
      </p>

      <svg
        className="strip"
        viewBox="0 0 400 104"
        role="img"
        aria-label="Strip plot of answer rate. All eight agents fall between 79.1 percent and 82.6 percent: Diane 79.1, Greg 80.4, Jim 80.5, Martha 80.6, Joe 81.6, Becky 81.9, Stewart 82.0, Dan 82.6. The overall call centre answer rate is 74.1 percent, which is below every individual agent."
      >
        {/* agent cluster band */}
        <rect
          x={bandL}
          y={40}
          width={bandR - bandL}
          height={26}
          fill="var(--accent-tint)"
          stroke="var(--rule-strong)"
          strokeWidth="0.8"
        />
        <text
          x={(bandL + bandR) / 2}
          y={32}
          textAnchor="middle"
          fontSize="9"
          fill="var(--ink-2)"
          fontWeight="500"
        >
          All 8 agents
        </text>

        {/* overall marker */}
        <line
          x1={x(overall)}
          y1={28}
          x2={x(overall)}
          y2={74}
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeDasharray="3 2.5"
        />
        <text
          x={x(overall)}
          y={22}
          textAnchor="middle"
          fontSize="9"
          fill="var(--accent)"
          fontWeight="600"
        >
          Overall 74.1%
        </text>

        {/* agent dots */}
        {agents.map((a) => (
          <circle
            key={a.n}
            cx={x(a.v)}
            cy={53}
            r="4.2"
            fill="var(--ink)"
            fillOpacity="0.82"
          />
        ))}

        {/* axis */}
        <line x1={34} y1={82} x2={370} y2={82} stroke="var(--rule-strong)" strokeWidth="0.8" />
        {[70, 75, 80, 85].map((t) => (
          <g key={t}>
            <line x1={x(t)} y1={82} x2={x(t)} y2={86} stroke="var(--rule-strong)" strokeWidth="0.8" />
            <text x={x(t)} y={97} textAnchor="middle" fontSize="8.5" fill="var(--muted)">
              {t}%
            </text>
          </g>
        ))}
      </svg>

      <p className="viz__note">
        No. Every agent sits inside a 3.5-point band (79.1% to 82.6%) with
        CSAT spanning just 0.14 (3.33 to 3.47) and resolution 1.7 points (88.9%
        to 90.6%). There is no underperformer to find. The more useful
        observation is the gap: the centre&rsquo;s overall answer rate of 74.1%
        is lower than every single agent&rsquo;s, which means the missing calls
        are being lost somewhere other than agent handling.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function ProjectChart({ kind }: { kind: string }) {
  if (kind === "logistics") {
    return (
      <PairedRanking
        question="Which city is the delay problem, and does the answer change with the measure?"
        describe="Two rankings of the same five cities. By delay rate: Yantai 50.35 percent, Jilin 48.65, Chongqing 45.34, Hangzhou 37.20, Shanghai 25.45. By delayed delivery volume: Hangzhou 420 thousand, Shanghai 308 thousand, Chongqing 204 thousand, Yantai 35 thousand, Jilin 5 thousand."
        left={{
          heading: "Ranked by delay rate",
          sub: "What the dashboards show",
          bars: [
            { label: "Yantai", value: 50.35, display: "50.35%", on: true },
            { label: "Jilin", value: 48.65, display: "48.65%" },
            { label: "Chongqing", value: 45.34, display: "45.34%" },
            { label: "Hangzhou", value: 37.2, display: "37.20%" },
            { label: "Shanghai", value: 25.45, display: "25.45%" },
          ],
        }}
        right={{
          heading: "Ranked by delayed deliveries",
          sub: "What the business carries",
          bars: [
            { label: "Hangzhou", value: 420, display: "~420K", on: true },
            { label: "Shanghai", value: 308, display: "~308K" },
            { label: "Chongqing", value: 204, display: "~204K" },
            { label: "Yantai", value: 35, display: "~35K" },
            { label: "Jilin", value: 5, display: "~5K" },
          ],
        }}
        footnote="Delayed deliveries = city delivery volume × city delay rate. The five cities sum to ~972K, which reconciles with the 970K+ figure and confirms the derivation. Yantai has the worst rate but accounts for under 4% of late deliveries; Hangzhou has a mid-tier rate and accounts for roughly 43%. Same data, opposite priority."
      />
    );
  }

  if (kind === "mortgage") {
    return (
      <PairedRanking
        sharedMax
        question="Which borrower variable actually separates risk?"
        describe="Delinquency rate by credit score band: Poor under 580 is 49.2 percent, Fair 36.9, Good 18.9, Very Good 9.7, Excellent 8.9. Delinquency rate by debt-to-income band: Extreme 23.09 percent, Very High 23.05, High 20.89, Moderate 18.15, Low 17.33. Both panels use the same scale."
        left={{
          heading: "By credit score band",
          sub: "5.5× spread",
          bars: [
            { label: "Poor <580", value: 49.2, display: "49.2%", on: true },
            { label: "Fair", value: 36.9, display: "36.9%" },
            { label: "Good", value: 18.9, display: "18.9%" },
            { label: "Very good", value: 9.7, display: "9.7%" },
            { label: "Excellent", value: 8.9, display: "8.9%" },
          ],
        }}
        right={{
          heading: "By debt-to-income band",
          sub: "1.3× spread",
          bars: [
            { label: "Extreme 50+", value: 23.09, display: "23.09%" },
            { label: "Very high", value: 23.05, display: "23.05%" },
            { label: "High", value: 20.89, display: "20.89%" },
            { label: "Moderate", value: 18.15, display: "18.15%" },
            { label: "Low <20", value: 17.33, display: "17.33%" },
          ],
        }}
        footnote="Both panels are drawn on the same scale, which is the point. Credit score moves delinquency from 8.9% to 49.2%, a 40-point spread. DTI moves it from 17.33% to 23.09%, under 6 points. Portfolio delinquency averages 19.78%. DTI is a real signal but a weak separator on its own; monitoring built on DTI thresholds would sort the portfolio far less effectively than monitoring built on credit band."
      />
    );
  }

  if (kind === "startup") {
    return (
      <ProportionBar
        question="What does the class imbalance look like without a log scale?"
        total={196553}
        parts={[
          { label: "Operating: 183,441", value: 183441, display: "93.3%" },
          {
            label: "Acquired, closed, IPO: 13,112",
            value: 13112,
            display: "6.7%",
            accent: true,
          },
        ]}
        footnote="The distribution chart below uses a logarithmic axis, which is the right call. On a linear scale the three smaller classes are barely visible, as this bar shows. That sliver is the entire subject of the analysis. It is also why a model can score 93.3% accuracy by predicting nothing."
      />
    );
  }

  if (kind === "callcenter") return <AgentStrip />;

  return null;
}
