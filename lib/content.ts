export const PERSON = {
  name: "Fatema Akhtar",
  role: "Data Analyst",
  discipline: "Data Analyst",
  location: "Mumbai, India",
  email: "fatemaakhtar9324@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatema-akhtar",
  github: "https://github.com/FatemaAkhtar",
  resume: "/fatema-akhtar-resume.pdf",
  tools: ["SQL", "Power BI", "Python", "Excel"],
  /* Analytical domains: where the toolkit has been applied. Introduced once
     in the hero; the projects carry the evidence. Deliberately NOT framed as
     a supply-chain specialisation. */
  domains: [
    "Business Analytics",
    "Supply Chain & Operations",
    "Financial Risk",
  ],
};

/* ------------------------------------------------------------------ */
/* Site address                                                        */
/*                                                                     */
/* This is the full public web address of the site. It is used to      */
/* build the sitemap and the social-preview tags, which must contain   */
/* absolute URLs because LinkedIn, WhatsApp and Google fetch them      */
/* from their own servers, not from inside this site.                  */
/*                                                                     */
/* You normally do NOT need to touch this. It works out of the box on  */
/* Vercel and Netlify, which tell the app their own address at build   */
/* time. Only edit MY_DOMAIN below if you host somewhere else, or if   */
/* you attach a custom domain on Vercel/Netlify.                       */
/* ------------------------------------------------------------------ */

const MY_DOMAIN = "https://fatemaakhtar.com";

function resolveSiteUrl(): string {
  const strip = (u: string) => u.replace(/\/+$/, "");

  // 1. Set manually via an environment variable, always wins.
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return strip(process.env.NEXT_PUBLIC_SITE_URL);
  }
  // 2. Vercel: production domain, else the current deployment URL.
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${strip(vercel)}`;

  // 3. Netlify sets URL on production builds.
  if (process.env.URL) return strip(process.env.URL);

  // 4. Local development.
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  // 5. Self-hosted: fall back to the domain written above.
  return strip(MY_DOMAIN);
}

export const SITE_URL = resolveSiteUrl();

/* ------------------------------------------------------------------ */
/* Proof strip                                                         */
/* ------------------------------------------------------------------ */

export const PROOF = [
  { value: "5.87M+", label: "Logistics transactions analyzed" },
  { value: "970K+", label: "Delayed deliveries investigated" },
  { value: "500K+", label: "Mortgage records processed" },
  { value: "$37.8B", label: "Portfolio exposure analyzed" },
];

/* ------------------------------------------------------------------ */
/* What I solve                                                        */
/* ------------------------------------------------------------------ */

export const SOLVES = [
  {
    title: "Performance gaps",
    body: "Finding where KPIs are falling behind, and understanding what is driving the gap.",
  },
  {
    title: "Operational bottlenecks",
    body: "Investigating recurring delays, inefficiencies and process-level issues.",
  },
  {
    title: "Data quality",
    body: "Cleaning, validating, reconciling and transforming large datasets before trusting what they say.",
  },
  {
    title: "KPI & trend analysis",
    body: "Working out whether a change is real, and what it should be measured against.",
  },
  {
    title: "Root cause analysis",
    body: "Moving beyond what happened to investigate why it happened.",
  },
  {
    title: "Business insights",
    body: "Explaining what a finding means for the problem, not just what the chart shows.",
  },
];

/* ------------------------------------------------------------------ */
/* How I work                                                          */
/* ------------------------------------------------------------------ */

export const PROCESS = [
  { n: "01", title: "Define", body: "Work out what is actually being asked." },
  { n: "02", title: "Validate", body: "Check data quality, consistency and reliability." },
  { n: "03", title: "Investigate", body: "Analyze patterns, segments, trends and performance." },
  { n: "04", title: "Explain", body: "Identify drivers, gaps and potential root causes." },
  { n: "05", title: "Communicate", body: "Say what the numbers mean, in plain language." },
  { n: "06", title: "Act", body: "Recommend what should be investigated, changed or monitored next." },
];

export const CHAIN = [
  "Question",
  "Data",
  "Validation",
  "Investigation",
  "Pattern",
  "Insight",
  "Action",
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const SKILLS: { group: string; note?: string; items: string[] }[] = [
  {
    group: "Analytics",
    items: [
      "Data Analysis",
      "Descriptive Analysis",
      "Trend Analysis",
      "KPI Analysis",
      "Root Cause Analysis",
      "Operational Analytics",
      "Supply Chain & Operations Analytics",
      "Business Insights",
    ],
  },
  {
    group: "Programming & Databases",
    items: ["SQL", "MySQL", "Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    group: "BI & Visualization",
    items: [
      "Power BI",
      "DAX",
      "Interactive Dashboards",
      "KPI Dashboards",
      "Data Modeling",
    ],
  },
  {
    group: "Data Quality & ETL",
    items: [
      "Data Extraction",
      "Data Cleaning",
      "Data Validation",
      "Data Transformation",
      "Data Reconciliation",
      "Data Standardization",
      "ETL",
    ],
  },
  {
    group: "Statistics & ML",
    items: [
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Machine Learning",
      "Classification Models",
    ],
  },
  {
    group: "Excel",
    items: ["Pivot Tables", "VLOOKUP", "XLOOKUP", "VBA", "Power Query"],
  },
  /* Modern AI tooling used to support analysis and workflow efficiency.
     Deliberately framed as assistive tooling used ALONGSIDE the core stack:
     no AI/ML specialism, no production AI experience, and no suggestion that
     these tools do the analysis. */
  {
    group: "AI-Assisted Analytics",
    note: "Used alongside SQL, Power BI, Python and Excel",
    items: [
      "ChatGPT",
      "Microsoft Copilot",
      "AI-assisted data exploration",
      "Analytical problem solving",
      "Query and formula assistance",
      "Research and workflow support",
    ],
  },
  {
    group: "Cloud",
    note: "Foundational Knowledge",
    items: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const EXPERIENCE = [
  {
    org: "Technocolabs Softwares",
    role: "Data Analyst Intern",
    period: "Jun 2025 – Sep 2025",
    body: "Worked on large-scale financial and operational datasets (extraction, cleaning, validation and analysis) and built reporting to communicate findings.",
    projects: ["logistics-analytics", "mortgage-risk-analytics"],
  },
  {
    org: "Technocolabs Softwares",
    role: "Data Analyst Intern",
    period: "Nov 2023 – Feb 2024",
    body: "Data preparation and exploratory analysis: standardising raw data, checking consistency, and summarising patterns for review.",
    projects: ["startup-outcome-prediction"],
  },
];

export const EDUCATION = {
  degree: "B.Sc. Information Technology",
  school: "University of Mumbai",
  cgpa: "9.9 / 10",
  completed: "April 2025",
};

/* Supporting evidence of the analytics foundation. Stated plainly: these are
   training credentials, not claimed outcomes. */
export const CREDENTIALS = [
  {
    title: "Google Data Analytics Professional Certificate",
    meta: "Coursera \u00b7 Completed March 2026",
  },
  {
    title: "Full-Time Data Analytics Training Program",
    meta: "NetTech India \u00b7 7 Months",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    meta: "Amazon Web Services (AWS) \u00b7 September 2026",
  },
];

/* University activities. Wording is deliberately literal: a selection to
   present, and a volunteer contribution. No award, placing or leadership
   claim is made or implied. */
/* Chronological progression shown on the About page.

   Every date here is user-verified. `kind` is a short editorial label so a
   reader can tell at a glance which milestones are employment, which are
   study, and which are credentials: the NetTech programme in particular
   must never read as a job.

   DLLE has no verified date, so it is NOT in the timeline. It lives in the
   University & Community section instead. Do not add a date to it. */
export type JourneyStep = {
  when?: string;
  kind: string;
  title: string;
  org: string;
  note?: string;
  noteStrong?: boolean;
  body?: string;
};

export const JOURNEY: JourneyStep[] = [
  {
    when: "November 2023 \u2013 February 2024",
    kind: "Internship",
    title: "First Data Analyst Internship",
    org: "Technocolabs Softwares",
    body: "First hands-on Data Analyst internship. Data preparation and exploratory analysis: standardising raw data, checking consistency, and summarising patterns for review.",
  },
  {
    when: "2025",
    kind: "Education",
    title: "B.Sc. Information Technology",
    org: "University of Mumbai",
    note: "CGPA 9.9 / 10",
    noteStrong: true,
  },
  {
    when: "June 2025 \u2013 September 2025",
    kind: "Internship",
    title: "Second Data Analyst Internship",
    org: "Technocolabs Softwares",
    body: "Worked on large-scale financial and operational datasets (extraction, cleaning, validation and analysis) and built reporting to communicate findings.",
  },
  {
    when: "7 Months",
    kind: "Formal training",
    title: "Full-Time Data Analytics Training Program",
    org: "NetTech India",
    body: "Structured, full-time analytics training. A learning programme, not employment.",
  },
  {
    when: "March 2026",
    kind: "Credential",
    title: "Google Data Analytics Professional Certificate",
    org: "Coursera",
    body: "Completed professional credential in data analytics.",
  },
  {
    when: "September 2026",
    kind: "Training",
    title: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services (AWS)",
  },
];

export const BEYOND = [
  {
    title: "Avishkar Research Convention (University Level)",
    meta: "University of Mumbai · December 2023",
    body: "Selected as the project presenter at the Avishkar Research Convention (University Level), representing the University of Mumbai. Presented an IoT-based research project, \u201cSmart Plant Piano,\u201d showcasing research methodology, technical problem-solving, and effective communication to an academic evaluation panel.",
  },
  {
    title: "DLLE Student Volunteer",
    meta: "University of Mumbai · Department of Lifelong Learning and Extension",
    body: "Contributed to university extension programs focused on community engagement, social awareness, and student development initiatives organized by the University of Mumbai, promoting civic responsibility and collaborative participation.",
  },
];

/* ------------------------------------------------------------------ */
/* Additional work: repository-only projects                           */
/*                                                                     */
/* These are NOT case studies. They sit in the Additional Work section  */
/* beside the Call Center project and link straight out to GitHub, so   */
/* they deliberately have no /work/<slug> route and no A-J write-up.    */
/*                                                                     */
/* Every figure below was read out of the repository itself:            */
/*  - Sales: conclusion.pdf states December ($4,613,443.32) as the best  */
/*    month, San Francisco as the top city, and 7 PM as the peak hour.   */
/*    185,950 is the row count of the workbook's "Transformed Data"      */
/*    sheet, which matches the Orders card on her own dashboard.         */
/*  - Swiggy: 10 numbered questions in "swiggy case study.sql", across    */
/*    7 tables, using the 4 function families named in the repo README.   */
/* Nothing here is estimated. Do not add metrics the repos do not show.  */
/* ------------------------------------------------------------------ */

export type ExtraProject = {
  index: string;
  domain: string;
  shortTitle: string;
  question: string;
  summary: string;
  tools: string[];
  figures: Figure[];
  github: string;
  /* Only set when a real screenshot exists in the repository. */
  preview?: { dir: string; file: string; caption: string };
};

export const EXTRA: ExtraProject[] = [
  {
    index: "05",
    domain: "Sales Analytics / Excel",
    shortTitle: "Sales Insights & Analysis",
    question:
      "Across twelve months of electronics retail sales, which month, city, hour and product actually drive the numbers?",
    summary:
      "An Excel build end to end: raw transactions cleaned into a transformed sheet, hour, month, city and state derived from the order date and address, then five pivot tables and four charts assembled into one dashboard. December is the strongest month at $4.61M, San Francisco the strongest city at $8.26M, and orders peak at 7 PM.",
    tools: ["Excel", "Pivot Tables", "Excel Charts", "Data Transformation"],
    figures: [
      { value: "185,950", label: "orders analysed" },
      { value: "$4.61M", label: "december, best month" },
      { value: "7 PM", label: "peak order hour" },
    ],
    github: "https://github.com/FatemaAkhtar/Sales-Insights-Project",
    preview: {
      dir: "sales",
      file: "1 sales-analysis-dashboard.png",
      caption:
        "The Excel dashboard from the repository: sales by month, sales by city, order volume by hour, and quantity against price by product.",
    },
  },
  {
    index: "06",
    domain: "SQL / Business Analytics",
    shortTitle: "Swiggy SQL Case Study",
    question:
      "Which customers and restaurants drive orders, what do people repeatedly buy together, and how does revenue move month over month?",
    summary:
      "Ten business questions answered in MySQL against a seven-table food-delivery schema. Customers who never ordered, average price per dish, top restaurant by month, revenue thresholds, repeat customers, month-over-month revenue growth using LAG, each customer's favourite dish, and the most frequently paired products. Queries only: the repository holds the SQL, the schema and the question set, not a report.",
    tools: ["MySQL", "Joins", "Subqueries", "CTEs", "Window Functions"],
    figures: [
      { value: "10", label: "business questions" },
      { value: "7", label: "related tables" },
      { value: "4", label: "sql function families" },
    ],
    github: "https://github.com/FatemaAkhtar/Swiggy-Case-Study-Sql",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Figure = { value: string; label: string };

export type Shot = {
  file: string; // expected filename inside /public/dashboards
  title: string;
  notice: string; // "What should I notice here?"
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  question: string;
  summary: string;
  figures: Figure[];
  tools: string[];
  github: string;
  featured: boolean;
  shotDir: string;
  /* One dashboard used as the visual preview on the Work page. `file` names a
     real screenshot inside /public/dashboards/<shotDir>/. If that exact file
     is not present, the first image in the folder is used instead, so
     swapping screenshots never breaks the page. The caption is required: it
     answers "what should I notice here?" so no image sits unexplained. */
  preview?: { file: string; caption: string };
  domain: string;
  problem: string[];
  scale: Figure[];
  scaleNote?: string;
  data: string[];
  quality: { step: string; body: string }[];
  analysis: string[];
  findings: { head: string; body: string }[];
  matters: string[];
  next: string[];
  toolsDetail: { group: string; items: string }[];
  shots: Shot[];
  deepDive: string;
  chart?: "logistics" | "mortgage" | "startup" | "callcenter";
};

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "logistics-analytics",
    index: "01",
    title: "Last-Mile Delivery Performance & Optimization Analytics",
    shortTitle: "Last-Mile Delivery Performance",
    subtitle:
      "Finding the patterns behind delivery delays and operational performance gaps.",
    question:
      "Where are delivery operations breaking down, and what patterns explain the delays?",
    summary:
      "5.87M logistics transactions across five cities over six months. Network SLA compliance sits at 66.11%, so roughly a third of deliveries arrive late. The work was finding out where that third actually comes from, and the answer is not the city with the worst delay rate.",
    figures: [
      { value: "5.87M+", label: "transactions" },
      { value: "970K+", label: "delayed deliveries" },
      { value: "66.11%", label: "SLA compliance" },
    ],
    tools: ["SQL", "Power BI", "Python", "Power Query", "DAX"],
    github:
      "https://github.com/FatemaAkhtar/Last-Mile-Delivery-Performance-Optimization-Analytics",
    featured: true,
    shotDir: "logistics",
    preview: {
      file: "1 executive-operations-overview.png",
      caption:
        "Power BI, executive view: 66.11% SLA compliance across 2.86M deliveries, and a city spread running from Shanghai at 74.55% down to Yantai at 49.65%.",
    },
    domain: "Supply Chain & Operations",
    chart: "logistics",
    problem: [
      "Large-scale logistics data can show where delays occur, but the more important question is what patterns are driving those delays.",
      "The network reports 66.11% SLA compliance and a 33.89% delay rate. That single pair of numbers is true and almost useless on its own. An operations team cannot act on “a third of deliveries were late.” They need to know which cities, which hours and which part of the process that third is concentrated in.",
      "So the analysis was built to answer a narrower question: if you could only fix one thing, where would the evidence tell you to start?",
    ],
    scale: [
      { value: "5.87M", label: "Transactions processed" },
      { value: "3.01M", label: "Pickups" },
      { value: "2.86M", label: "Deliveries" },
      { value: "970K+", label: "Delayed deliveries" },
      { value: "4.60K", label: "Active couriers" },
      { value: "5", label: "Cities" },
      { value: "6 mo", label: "May – Oct 2023" },
    ],
    scaleNote:
      "One denominator worth being precise about: the 970K+ delayed shipments are measured against the 2.86M deliveries, not against all 5.87M transactions. 2.86M × 33.89% ≈ 969K, which is where the figure comes from. Quoting it against the full transaction count would halve the apparent delay rate and misrepresent the operation. Couriers work the same way: 21K+ exist in the dataset, but 4.60K were active in the window, and that active count is the denominator behind every per-courier figure here.",
    data: [
      "Two fact tables, fact_delivery_clean (2.86M rows) and fact_pickup_clean (3.01M rows), held separately because pickups and deliveries are different events with different timing behaviour.",
      "Delay fields: delay, Delay Duration, Delayed Delivery, is_delayed on the delivery side; is_late and pickup_delay on the pickup side.",
      "dim_city and dim_region for geographic segmentation across five cities.",
      "dim_courier for courier-level performance. 21K+ couriers exist in the dataset, of which 4.60K were active during the six-month window. Per-courier rates are calculated against the active 4.60K, since dividing by the full roster would understate every courier's workload.",
      "dim_aoi (area-of-interest type) to distinguish delivery environments.",
      "A conformed Date_Table with hour, day, month and an is_peak_hour flag, so both fact tables could be sliced on the same time axis.",
    ],
    quality: [
      {
        step: "Clean",
        body: "The fact tables are named _clean for a reason. Duplicate transactions, null timestamps and inconsistent city labels were resolved first. A single city spelled two ways silently splits a segment and makes it look better than it is.",
      },
      {
        step: "Validate",
        body: "Checked delay flags against the underlying durations rather than trusting them. A row flagged on-time with a delay duration above zero is a contradiction, and at 2.86M rows those contradictions move a city's SLA figure.",
      },
      {
        step: "Transform",
        body: "Derived delay duration, delay-rate measures, hour buckets and operational windows (morning / afternoon / evening) in SQL and Power Query, so the same definitions applied everywhere instead of being re-invented per visual.",
      },
      {
        step: "Reconcile",
        body: "Pickups (3.01M) and deliveries (2.86M) sum to the 5.87M headline, and the per-city delivery volumes sum back to 2.86M. Both checks had to hold before any segment number was reported.",
      },
    ],
    analysis: [
      "SLA compliance and delay rate at network level, to establish the baseline: 66.11% and 33.89%.",
      "Delay rate by city, because a network average across five cities is an average of very different operations.",
      "Delay volume by city (rate multiplied by volume), which is a different ranking from rate alone and the one that matters for prioritisation.",
      "Average processing time by hour of day, to find where in the daily cycle time is actually lost.",
      "Delivery volume by hour, to test whether the slow hours and the busy hours are the same hours.",
      "Operational windows (morning / afternoon / evening) to see how activity distributes across the working day.",
      "Volume growth across May–Oct 2023, to separate a growing operation from a deteriorating one.",
      "Courier and AOI-type breakdowns to check whether delays track a particular delivery environment.",
    ],
    findings: [
      {
        head: "The worst delay rate and the biggest delay problem are different cities",
        body: "Yantai has the network's worst delay rate at 50.35%, but on 0.07M deliveries, that is only ~35K late deliveries, under 4% of the network total. Hangzhou's rate is a mid-tier 37.20%, yet on 1.13M deliveries it produces ~420K late deliveries: roughly 43% of every delayed delivery in the network. Ranking cities by rate points operations at Yantai. Ranking by delay volume points at Hangzhou. (Derived from the city table; the five cities sum to ~972K, which reconciles with the stated 970K+.)",
      },
      {
        head: "Volume is not what is causing delays",
        body: "Shanghai is the busiest city at 1.21M deliveries and also the best performer at 74.55% SLA. Jilin is the quietest at 0.01M and sits near the bottom at 51.35%. If load were driving lateness the ranking would run the other way. It doesn't, which points at local process and scheduling rather than capacity, and rules out the most intuitive explanation.",
      },
      {
        head: "The busiest hour is not the slowest hour",
        body: "Deliveries peak at 8 AM with 0.49M. Average processing time peaks four hours earlier, at 4 AM, at 104 minutes. The five slowest hours are 4 AM (104), 6 AM (99), 7 AM (92), 5 AM (92) and 8 AM (88). The constraint sits in the early-morning window and is largely spent before the volume peak arrives.",
      },
      {
        head: "A 66.11% network figure conceals a 25-point spread",
        body: "City delay rates run from Shanghai's 25.45% to Yantai's 50.35%. Shanghai sits 8.44 points above the network SLA average. Reporting the network number alone hides the fact that in the weakest city, every second delivery misses its window.",
      },
      {
        head: "The operation grew 187% while this was measured",
        body: "Monthly deliveries rose from 0.24M in May 2023 to 0.69M in October, a 187% increase. Any performance reading over this period is a reading of an operation being scaled, which is context the delay figures need, and a reason to track SLA as a trend rather than as a six-month average.",
      },
    ],
    matters: [
      "Prioritisation changes completely depending on which metric you rank by. A rate-ranked dashboard sends the operations team to Yantai, where fixing everything recovers ~35K deliveries. A volume-weighted view sends them to Hangzhou, where the same effort addresses ~420K. That distinction is the practical output of this analysis.",
      "Because delay does not track volume across cities, the explanation is unlikely to be under-resourcing at the network level. That redirects investigation toward city-level process, scheduling and routing, and away from an expensive and probably wrong capacity conclusion.",
      "The early-morning processing peak at 4 AM is actionable in a way the 8 AM volume peak is not. Time lost before dispatch propagates into every delivery that follows it, so a fix there moves more of the day than a fix at peak hour.",
      "Shanghai runs the highest volume at the best SLA. That makes it the internal benchmark: whatever it is doing differently is a more useful starting point than any external target.",
    ],
    next: [
      "Rank cities by delayed-delivery volume rather than delay rate in the operational view, and quantify what a 5-point rate improvement in Hangzhou would recover against the same improvement in Yantai.",
      "Break the 4 AM–8 AM processing peak into its component steps to find whether the time is lost in sorting, dispatch or first-leg transit. The current model shows that it is lost, not where.",
      "Compare Shanghai's process against Hangzhou's directly, since they run comparable volumes (1.21M vs 1.13M) at very different SLA (74.55% vs 62.80%). That is the cleanest natural comparison in the dataset.",
      "Plot SLA compliance as a monthly trend across the 187% growth period, to establish whether performance held, degraded or improved as volume scaled.",
      "Check whether the pickup-side delay (pickup_delay, is_late) predicts downstream delivery delay, since both fact tables share courier, city and date keys and that link is not yet tested.",
      "Bring in weather, traffic and address-quality data if it can be obtained. The current model cannot explain delays it does not record, and the early-morning pattern is consistent with factors outside the dataset.",
    ],
    toolsDetail: [
      { group: "Extraction & preparation", items: "SQL, Power Query, Excel" },
      { group: "Analysis", items: "SQL, Python (Pandas, NumPy)" },
      {
        group: "Modeling",
        items: "Star schema: 2 fact tables, 5 dimensions, conformed date table, DAX measures",
      },
      { group: "Reporting", items: "Power BI: 7 interactive dashboards" },
    ],
    deepDive:
      "The repository holds the SQL used to build and validate the fact tables, the DAX measures behind the KPIs, and the documentation for the star schema shown above.",
    shots: [
      {
        file: "1 executive-operations-overview.png",
        title: "Executive operations overview",
        notice:
          "The network baseline: 2.86M deliveries, 66.11% SLA compliance, 33.89% delay rate. Note the city bar chart at the bottom: Shanghai at 74.55% down to Yantai at 49.65%. That 25-point spread is the reason nothing on this page should be read as a single number.",
      },
      {
        file: "2 operations-control-center.png",
        title: "Operations control centre",
        notice:
          "Where the 5.87M splits into 3.01M pickups and 2.86M deliveries. The delay-hotspot bars are ranked by rate, Yantai first. Compare that ranking against the efficiency matrix on the right, where Shanghai sits top-right on both volume and SLA: high load is not producing the delays.",
      },
      {
        file: "3 geo-intelligence-center.jpg",
        title: "Geo intelligence: city performance",
        notice:
          "The regional table is the source for the delay-volume calculation. Read volume and delay rate together: Hangzhou's 1.13M at 37.20% produces far more late deliveries than Yantai's 0.07M at 50.35%, even though Yantai looks worse in every rate-based view.",
      },
      {
        file: "4 time-intelligence-center.png",
        title: "Time intelligence: daily rhythm",
        notice:
          "The decoupling of volume and delay. The orange bar marks peak deliveries at 8 AM; the processing-time line peaks earlier, at 4 AM and 104 minutes. The bottleneck ranking below confirms the four slowest hours all sit before 8 AM.",
      },
      {
        file: "5 star-schema-data-model.png",
        title: "The underlying data model",
        notice:
          "Included because the model is what makes the rest trustworthy. Two fact tables kept separate, five conformed dimensions, and a single date table serving both, so a city or hour filter means the same thing on the pickup side as on the delivery side.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "mortgage-risk-analytics",
    index: "02",
    title: "Mortgage-Backed Securities Risk Analytics",
    shortTitle: "Mortgage-Backed Securities Risk Analytics",
    subtitle:
      "Which borrower and loan characteristics actually sort good loans from bad.",
    question:
      "How can borrower and loan characteristics be used to understand portfolio risk and delinquency patterns?",
    summary:
      "500K+ mortgage records processed down to a 291K active-loan portfolio carrying $37.8B of exposure, with delinquency running at 19.78%. The question behind the reporting was which borrower characteristic actually sorts good loans from bad ones, because the portfolio holds several candidates, and they are not equally useful.",
    figures: [
      { value: "$37.8B", label: "total exposure" },
      { value: "~$6.8B", label: "at risk of default" },
      { value: "19.78%", label: "delinquency rate" },
    ],
    tools: ["SQL", "Python", "Power BI", "Excel", "DAX"],
    github:
      "https://github.com/FatemaAkhtar/Mortgage-Backed-Securities-Risk-Analytics-Business-Intelligence",
    featured: true,
    shotDir: "mortgage",
    preview: {
      file: "1 loan-portfolio-risk-exposure.jpg",
      caption:
        "Power BI, portfolio view: roughly $6.8B of the $37.8B exposure sits at risk of default, with delinquency broken out by credit band underneath.",
    },
    domain: "Financial Risk",
    chart: "mortgage",
    problem: [
      "A mortgage portfolio can look healthy in aggregate and still hold concentrated risk. Counting delinquent loans answers a reporting question; it does not tell you how much money is exposed, or which borrower characteristics that exposure sits behind.",
      "This portfolio has 58K delinquent loans against 234K in good standing, and an average credit score of 712, a respectable number that describes almost nothing about the tail.",
      "So the analysis was framed around discrimination rather than description: given credit score, DTI, LTV, loan term, occupancy and geography, which of these actually separates the loans that default from the loans that don't? A variable that everyone tracks but that barely moves the delinquency rate is a variable that should not be driving monitoring policy.",
    ],
    scale: [
      { value: "500K+", label: "Records processed" },
      { value: "291K", label: "Active loans analysed" },
      { value: "$37.8B", label: "Total exposure" },
      { value: "~$6.8B", label: "At risk of default" },
      { value: "58K", label: "Delinquent loans" },
      { value: "712", label: "Avg credit score" },
    ],
    scaleNote:
      "The source dataset holds 500K+ mortgage records. 291K of those are active loans, and every figure on this page is stated against that active portfolio rather than against the raw record count. Two exposure figures also appear, and they measure different things. ~$6.8B (18.63%) is exposure at risk of default. ~$12.3B is exposure sitting inside medium-and-high risk segments, the 33.04% of the portfolio flagged for monitoring. Being in a risk tier is not the same as being expected to default, and quoting the larger number as if it were the smaller one would overstate the problem by nearly double.",
    data: [
      "500K+ mortgage records in the source dataset, filtered to the 291K active loans that reconcile to $37.8B of exposure.",
      "Credit score at origination, banded for segmentation (average 712).",
      "Debt-to-income ratio, banded from Low (<20) to Extreme (50+).",
      "Loan-to-value ratio, banded Low (<80), Moderate (80–90) and High (90–100).",
      "Loan purpose (purchase, refinance and cash-out), splitting 123K / 110K / 58K.",
      "Occupancy status, dominated by owner-occupied at 94.74%.",
      "Loan term in months, and first-time-homebuyer status (10.05% of borrowers).",
      "Delinquency and foreclosure status, plus property state for geographic analysis.",
    ],
    quality: [
      {
        step: "Clean",
        body: "Reduced 500K+ raw records to the 291K active loans the analysis is about, applying the active-status filter explicitly rather than letting inactive loans dilute every rate. Missing credit score, DTI and LTV values were handled rather than dropped. Missingness in a risk field is rarely random, and removing those rows quietly biases the risk distribution toward the loans that were well documented.",
      },
      {
        step: "Validate",
        body: "Range-checked the ratio fields before banding them. Credit scores outside plausible bounds, placeholder-coded DTI and LTV values, and balances inconsistent with loan terms all distort a band boundary, and a distorted boundary moves every segment figure that follows.",
      },
      {
        step: "Transform",
        body: "Banded the continuous variables into analysis-ready segments and derived a risk categorisation, so exposure could be aggregated consistently across low, medium and high risk tiers.",
      },
      {
        step: "Reconcile",
        body: "Three checks had to hold: the origination mix (123K + 110K + 58K) sums to 291K; the credit-band matrix sums to 291K; and 234K good-standing plus 58K delinquent returns the same total. Segment exposure also had to sum back to $37.8B before any figure was reported.",
      },
    ],
    analysis: [
      "Delinquency by credit score band, to establish the primary risk gradient against the 19.78% portfolio average.",
      "Delinquency by DTI band, tested as an independent discriminator rather than assumed to be one.",
      "Delinquency across a full LTV × DTI matrix, to check whether the two interact or simply overlap.",
      "Foreclosure rate by credit band and LTV together, since foreclosure and delinquency are different events with different severity.",
      "Loan term against foreclosure exposure.",
      "Geographic concentration by property state.",
      "Portfolio composition (loan purpose, occupancy, first-time buyer share), to understand who the portfolio is actually lending to.",
      "Exposure translation: converting every segment finding from a rate into a dollar figure, because the rate is not what the business carries.",
    ],
    findings: [
      {
        head: "Credit score separates risk 5.5×. DTI separates it 1.3×.",
        body: "Delinquency runs from 8.9% for Excellent (800+) borrowers to 49.2% for Poor (<580), a 40-point spread against a 19.78% portfolio average. DTI moves the same measure only from 17.33% to 23.09%, under 6 points. Both are real signals, but they are not comparable tools. Monitoring built on DTI thresholds would sort this portfolio far less effectively than monitoring built on credit band.",
      },
      {
        head: "Poor credit stays risky at every LTV",
        body: "Foreclosure rates for Poor (<600) borrowers are 18.48% at high LTV, 16.70% at medium and 15.76% at low, above 15% regardless of how much equity is in the property. For Excellent borrowers the same three figures are 1.29%, 0.79% and 0.51%. LTV modulates risk; credit band determines it.",
      },
      {
        head: "The largest borrower segment is also a high-risk one",
        body: "Fair (600–699) borrowers are the single biggest group at 107K loans, 36.7% of the portfolio. They carry foreclosure rates of 8.73% at high LTV and 8.08% at medium, roughly seven times the Excellent band. The portfolio's modal borrower is not its safest borrower, which is a concentration issue rather than a tail issue.",
      },
      {
        head: "Longer terms carry nearly double the foreclosure rate",
        body: "Loans of 341–360 months foreclose at 4.13%, against 2.28% for 300–320 months, with the portfolio average around 3%. Term is doing real work as a risk indicator and is cheaper to observe than most alternatives.",
      },
      {
        head: "Risk is geographically concentrated",
        body: "Louisiana (7.41%) and Indiana (7.29%) run foreclosure rates well above the 4.12% portfolio figure, and the elevated states cluster across southern and midwestern markets. Notably, their average credit scores (702 and 708) sit close to the portfolio's 712, so location is contributing something the borrower-level fields do not capture.",
      },
    ],
    matters: [
      "If credit band separates risk 5.5× and DTI separates it 1.3×, then monitoring effort and underwriting attention should not be split evenly between them. That is a concrete allocation decision falling directly out of the numbers.",
      "The concentration in Fair (600–699) matters more than the severity in Poor (<600). Poor is only 5K loans; Fair is 107K. A modest deterioration across the Fair band moves the portfolio far more than the entire Poor band defaulting.",
      "Separating the ~$6.8B at risk of default from the ~$12.3B sitting in monitored risk tiers keeps the conversation honest. Those two numbers answer different questions and are easy to conflate in a board pack.",
      "The state-level signal appearing at near-average credit scores means borrower-level fields are not sufficient on their own. Something regional (local market conditions, employment, property values) is not represented in the current model.",
    ],
    next: [
      "Weight each risk segment by exposure rather than loan count, so the largest single contributors to the ~$6.8B are named individually instead of pooled into tiers.",
      "Test whether DTI adds predictive value once credit band is already known, or whether it is largely redundant. The 1.3× spread suggests the second, and confirming it would simplify monitoring.",
      "Standardise credit-score banding across views. The composition analysis uses <600 / 600–699 / 700–749 / 750+ while the delinquency analysis uses <580 / 580–669 / 670–739 / 740–799 / 800+, which prevents the two from being multiplied together to derive delinquent loan counts per segment.",
      "Investigate the Louisiana and Indiana concentration directly, since their near-average credit scores rule out the most obvious borrower-level explanation.",
      "Add origination vintage. The current view is cross-sectional, and portfolio risk is time-dependent. A risk categorisation fitted to one point in time may not hold across the next.",
      "Define a short list of monitored KPIs (at-risk exposure, medium-to-high tier share, delinquency in the Fair band, and foreclosure rate in the elevated states) rather than a broad dashboard.",
    ],
    toolsDetail: [
      { group: "Extraction & preparation", items: "SQL, Excel, Power Query" },
      { group: "Analysis", items: "Python (Pandas, NumPy), SQL" },
      { group: "Modeling", items: "Risk banding, segmentation, DAX measures" },
      { group: "Reporting", items: "Power BI" },
    ],
    deepDive:
      "The repository holds the SQL and Python behind the risk banding, the segmentation logic, and the DAX measures used for the exposure calculations.",
    shots: [
      {
        file: "1 loan-portfolio-risk-exposure.jpg",
        title: "Portfolio risk and exposure",
        notice:
          "Read the two exposure figures against each other: ~$6.8B at risk of default (18.63%) in the top-left card, and $12.3B sitting in medium-and-high risk tiers in the donut. Below, the credit-score panel spans 8.9% to 49.2% while the DTI panel spans only 17.33% to 23.09%. That difference in spread is the central finding.",
      },
      {
        file: "2 credit-performance-delinquency.jpg",
        title: "Credit performance and foreclosure concentration",
        notice:
          "The matrix top-left is the one to study. Scan across the Poor (<600) row: 18.48%, 15.76%, 16.70%. Foreclosure stays above 15% at every LTV. Then scan the Excellent row: 1.29%, 0.51%, 0.79%. LTV shifts risk; credit band sets it. The map shows Louisiana and Indiana above 7% at near-average credit scores.",
      },
      {
        file: "3 borrower-lending-intelligence.png",
        title: "Borrower composition",
        notice:
          "Who the portfolio actually lends to, and the reason concentration matters. Fair (600–699) is the largest band at 107K loans, 36.7% of 291K, and it is the same band carrying 8.73% foreclosure at high LTV. The matrix also reconciles: all bands sum to 291K, matching the origination mix of 123K + 110K + 58K.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "startup-outcome-prediction",
    index: "03",
    title: "Startup Outcome Prediction",
    shortTitle: "Startup Outcome Prediction",
    subtitle:
      "What the data can honestly say when 93% of it is one outcome.",
    question:
      "Which measurable characteristics are associated with startups being acquired, going public, closing, or continuing to operate?",
    summary:
      "196,553 records across four outcomes, 93.3% of which are a single class. Before asking which characteristics matter, that imbalance has to be dealt with: it decides what any result here is allowed to mean.",
    figures: [
      { value: "196K+", label: "startup records" },
      { value: "93.3%", label: "in one class" },
      { value: "0.836", label: "ROC AUC" },
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/FatemaAkhtar/Startup-Outcome-Prediction",
    featured: true,
    shotDir: "startup",
    preview: {
      file: "1 outcome-distribution.png",
      caption:
        "Python, outcome distribution on a logarithmic axis: 183,441 operating companies against 1,134 IPOs. Every later result is read against this shape.",
    },
    domain: "Business / Exploratory Analytics",
    chart: "startup",
    problem: [
      "Startup outcomes are recorded after the fact: operating, acquired, closed, IPO. The analytical question is whether characteristics captured in the data are associated with those outcomes in a way that is measurable rather than anecdotal.",
      "This is framed deliberately as an association study, not a prediction product. With observational data of this kind, a classification model is a way of asking which features carry signal. It is not evidence of causation, and it is not something that should be pointed at a live investment decision.",
      "There is also a trap built into the dataset. 183,441 of the 196,553 records are still operating, 93.3%. A model that predicts “operating” every single time scores 93.3% accuracy while knowing nothing. Getting a defensible answer here depends almost entirely on refusing to report that number.",
    ],
    scale: [
      { value: "196,553", label: "Startup records" },
      { value: "183,441", label: "Operating (93.3%)" },
      { value: "9,394", label: "Acquired (4.8%)" },
      { value: "2,584", label: "Closed (1.3%)" },
      { value: "1,134", label: "IPO (0.6%)" },
    ],
    scaleNote:
      "The three outcomes that anyone actually cares about (acquired, closed, IPO) together account for 13,112 records, 6.7% of the dataset. IPO alone is 1,134 records, roughly one in every 173. Every modelling and evaluation decision in this project follows from those proportions.",
    data: [
      "Company-level records for 196,553 startups with a recorded outcome.",
      "Funding attributes: total funding raised, number of funding rounds, timing of first funding.",
      "Relationship counts: recorded connections between people and companies.",
      "Milestone counts and time to first milestone.",
      "Category, region and country codes.",
      "Presence indicators for the above, which turned out to matter more than expected.",
    ],
    quality: [
      {
        step: "Clean",
        body: "Resolved missing values across funding, relationship and milestone fields, and standardised category and location labels so grouping did not fragment the same value across spellings.",
      },
      {
        step: "Validate",
        body: "Checked date logic and consistency between related fields (founding dates after outcome dates, impossible durations) and confirmed every record carried exactly one recorded outcome.",
      },
      {
        step: "Transform",
        body: "Applied log1p transforms to the heavily skewed funding, relationship and timing variables, and encoded categorical fields. Missingness was recorded explicitly as has_* indicator flags rather than being imputed away, a decision that turned out to drive one of the main findings.",
      },
      {
        step: "Reconcile",
        body: "Confirmed class counts after every transformation step. The four outcomes sum to 196,553 throughout, so no filtering step quietly changed the distribution the models were evaluated against.",
      },
    ],
    analysis: [
      "Outcome distribution, measured precisely rather than described as “imbalanced”.",
      "Outcome profiles: median funding and median relationship count for each of the four outcomes.",
      "A majority-class baseline, built first, so every later model had something honest to beat.",
      "A class-balanced logistic regression, evaluated on accuracy, balanced accuracy and macro F1 together.",
      "Permutation feature importance measured as decrease in macro F1, not as model coefficients.",
      "A separate binary formulation, with the decision threshold swept across its full range rather than left at 0.5.",
      "Out-of-fold evaluation for threshold selection, and a held-out set for the final ranking assessment.",
    ],
    findings: [
      {
        head: "93.3% accuracy is the number to throw away",
        body: "The majority baseline scores 0.933 accuracy, identical to the operating class share, because that is all it is doing. On the same data it scores 0.25 balanced accuracy, which for four classes is exactly random, and 0.24 macro F1. Accuracy and balanced accuracy disagree completely, and accuracy is the one that is lying.",
      },
      {
        head: "The better model looks worse on the headline metric",
        body: "Balanced logistic regression drops accuracy from 0.933 to 0.64 while raising balanced accuracy from 0.25 to 0.655 and macro F1 from 0.24 to 0.31. It is a substantially more useful model that would be rejected by anyone comparing accuracy alone. This is the clearest argument in the project for choosing the metric before choosing the model.",
      },
      {
        head: "Whether a field is filled in predicts more than what it contains",
        body: "has_funding_rounds is the second most important feature by permutation importance. log1p_funding_total_usd, the actual amount raised, sits near zero. has_relationship_info and has_milestone_info both rank in the top five. The presence of a record carries more signal than its value, which points at how the data was collected: companies with complete profiles are systematically different from companies without them. That is a warning about the dataset, not a business insight about funding.",
      },
      {
        head: "The four outcomes separate cleanly on relationships and funding",
        body: "Median recorded relationships rise monotonically across outcomes: 3 for closed, 4 for operating, 6 for acquired, 12 for IPO. Median funding rises alongside: roughly $1M, $3M, $9M and $40M. The ordering is consistent across both variables, which is a genuine pattern. It is also entirely consistent with larger and older companies simply having more of everything recorded about them.",
      },
      {
        head: "The model ranks well but cannot classify",
        body: "On the binary formulation the final model reaches 0.836 ROC AUC on unseen data, solid ranking performance. Yet the best achievable F1 across the entire threshold sweep is about 0.32, at a threshold of 0.76. Both are true at once: the model orders companies by likelihood usefully, but there is no cut-point that turns that ordering into a reliable yes/no call.",
      },
    ],
    matters: [
      "Anyone reporting accuracy on this dataset would report 93% and be confidently wrong. Choosing balanced accuracy and macro F1 before running anything is what makes the rest of the results interpretable.",
      "The missingness finding matters most to whoever uses this data next. If has_* flags outrank the values they describe, then a model built here risks learning which companies got documented rather than which companies succeeded.",
      "AUC 0.836 with best F1 0.32 has a specific practical reading: this is usable for ranking or shortlisting, and not usable for a decision. Reporting only the AUC would imply otherwise.",
      "A useful ranking of feature importance (category, funding-round presence, region, relationships) is a real output even without a deployable model. It tells you which fields are worth collecting properly.",
    ],
    next: [
      "Test whether the has_* indicators are proxies for company age or profile completeness. If they are, they are close to leakage and the honest move is to drop them and re-measure what remains.",
      "Report per-class precision and recall for IPO and closed specifically. With 1,134 and 2,584 records, macro F1 can move noticeably on a small number of predictions, and the confidence interval matters.",
      "Check calibration on the binary model. A 0.76 optimal threshold well above 0.5 suggests the probabilities are not calibrated, which affects how the ranking should be used.",
      "Audit every feature for post-outcome information: anything only knowable after a company was acquired or closed has to be excluded, and this deserves a dedicated pass rather than an assumption.",
      "Compare against a tree-based model to see whether the feature interactions logistic regression cannot represent are carrying additional signal.",
      "Keep the framing as association analysis. Nothing in this dataset supports a causal claim about what makes a startup succeed, and the missingness result is a good reason to stay cautious.",
    ],
    toolsDetail: [
      { group: "Preparation", items: "Python (Pandas, NumPy), log1p transforms, categorical encoding" },
      { group: "Analysis", items: "Exploratory data analysis, outcome profiling" },
      { group: "Modeling", items: "Scikit-learn: majority baseline, class-balanced logistic regression" },
      {
        group: "Evaluation",
        items: "Balanced accuracy, macro F1, permutation importance, threshold sweep, ROC AUC",
      },
      { group: "Visualisation", items: "Matplotlib" },
    ],
    deepDive:
      "This page is a summary. The full analysis lives in Jupyter notebooks in the repository: data cleaning and validation, exploratory analysis, feature engineering, the model comparison, threshold tuning and the final evaluation, with the code and reasoning at each step.",
    shots: [
      {
        file: "1 outcome-distribution.png",
        title: "Outcome distribution",
        notice:
          "Note the x-axis is logarithmic. Without it the bottom three bars would be invisible. Operating holds 183,441 records against 1,134 IPOs. Every result later in this project has to be read against this shape.",
      },
      {
        file: "2 outcome-profiles.png",
        title: "Outcome profiles: funding and relationships",
        notice:
          "The four outcomes line up in the same order on both axes: closed at 3 relationships and ~$1M, up to IPO at 12 and ~$40M. A real pattern, and also what you would expect if larger, older companies simply have more recorded about them.",
      },
      {
        file: "3 model-comparison.png",
        title: "Why accuracy was not the metric",
        notice:
          "The two left-hand bars are the whole argument. The majority baseline wins decisively on accuracy (0.933 vs 0.64) and loses decisively on balanced accuracy (0.25 vs 0.655). Same models, same data, opposite conclusions depending on which bar you read.",
      },
      {
        file: "4 feature-importance.png",
        title: "Permutation feature importance",
        notice:
          "Compare has_funding_rounds near the top with log1p_funding_total_usd near the bottom. Whether the funding field is populated matters more than how much was raised, which says something about the data collection, not about startups.",
      },
      {
        file: "5 threshold-tradeoff.png",
        title: "Threshold and the precision-recall trade-off",
        notice:
          "Precision and recall cross around 0.78, and F1 peaks at roughly 0.32 at a threshold of 0.76. The point is the height of that peak: even at its best setting, this classifier is not accurate enough to make a decision on.",
      },
      {
        file: "6 final-roc.png",
        title: "Final ranking performance",
        notice:
          "0.836 AUC on unseen data. The model orders companies by likelihood well. Read alongside the previous chart: strong ranking, weak classification. Both statements are true, and quoting only this one would overstate what the model can do.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "call-center-analytics",
    index: "04",
    title: "Call Center Operations & Efficiency Analytics",
    shortTitle: "Call Center Operations & Efficiency",
    subtitle:
      "Where service performance breaks down, and why it isn't the agents.",
    question:
      "Three of four service targets are being missed. Is the constraint agent performance, or something upstream of it?",
    summary:
      "Resolution rate beats its target at 90%. Answer rate misses its target by 16 points. The dashboard asks which agents are driving the gap, and the agent-level data answers that question in the negative, which is what makes the rest of the analysis interesting.",
    figures: [
      { value: "74.1%", label: "answer rate vs 90% target" },
      { value: "67.5s", label: "response vs 60s SLA" },
      { value: "3.40", label: "CSAT vs 4.0 target" },
    ],
    tools: ["SQL", "Power BI", "Excel", "DAX"],
    github: "https://github.com/FatemaAkhtar/call-center-performance-intelligence",
    featured: false,
    shotDir: "callcenter",
    preview: {
      file: "1 call-center-performance-overview.png",
      caption:
        "Power BI, service overview: of the four targets, only resolution rate is being met. Answer rate, response time and CSAT all miss.",
    },
    domain: "Operations Analytics",
    chart: "callcenter",
    problem: [
      "Four service KPIs are tracked against targets. Three miss: answer rate at 74.1% against a 90% target, average speed at 67.5 seconds against a 60-second SLA, and CSAT at 3.40 against a target of 4.0. One beats its target: resolution rate, at 90.0% against 85%.",
      "That split is the entire diagnostic. The one metric measured over calls that reached an agent is the one performing well. The metrics that include the calls that didn't are the ones failing.",
      "So the question was not “which agents need coaching” but “where are the calls going”.",
    ],
    scale: [
      { value: "74.1%", label: "Answer rate (target 90%)" },
      { value: "90.0%", label: "Resolution (target 85%)" },
      { value: "67.5s", label: "Avg speed (SLA 60s)" },
      { value: "3.40", label: "CSAT (target 4.0)" },
      { value: "~600", label: "Peak hourly volume" },
      { value: "8", label: "Agents analysed" },
    ],
    scaleNote:
      "These are single-day figures with day-over-day comparisons, not long-run averages. The dashboard is an operational monitor rather than a historical study. Worth stating, because it limits how far any single reading should be pushed.",
    data: [
      "Call-level records with timestamps and hour-of-day.",
      "Answered and unanswered call status.",
      "Response time per call, measured against the 60-second SLA.",
      "Resolution outcome for answered calls.",
      "Customer satisfaction scores.",
      "Agent-level performance across answer rate, CSAT, speed and resolution.",
      "Department and date attributes for filtering.",
    ],
    quality: [
      {
        step: "Clean",
        body: "Standardised call status values and handled records with missing response times or satisfaction scores rather than averaging over them.",
      },
      {
        step: "Validate",
        body: "Confirmed resolution and CSAT were only populated for answered calls. This is the check that makes the central finding possible: resolution and answer rate have different denominators, and treating them as comparable is the mistake the analysis is built to avoid.",
      },
      {
        step: "Transform",
        body: "Built hour-of-day buckets, an SLA breach flag against the 60-second threshold, and target-variance measures for each KPI so performance was always read against its target rather than in isolation.",
      },
      {
        step: "Reconcile",
        body: "Checked that answered plus unanswered calls returned total call volume in every time bucket, and that agent-level figures were consistent with the centre-level aggregates. That second check is where the most interesting discrepancy surfaced.",
      },
    ],
    analysis: [
      "Each KPI against its target, rather than as a standalone number.",
      "Call volume by hour against response time, to test whether load and delay move together.",
      "Response time against the 60-second SLA across the full volume range, not only at peak.",
      "Agent-level comparison across all four metrics, to test the performance-gap hypothesis directly.",
      "Agent figures reconciled against the centre-level answer rate.",
      "Day-over-day movement across all four KPIs, to see which are improving and which are not.",
    ],
    findings: [
      {
        head: "There is no underperforming agent",
        body: "All eight agents fall within a 3.5-point band on answer rate (79.1% to 82.6%). CSAT spans 0.14 across the whole team (3.33 to 3.47) and resolution spans 1.7 points (88.9% to 90.6%). The dashboard is titled “Which agents are driving performance gaps?” On this data, none of them are. The variation between agents is too small to explain a 16-point shortfall against target.",
      },
      {
        head: "The centre performs worse than every individual in it",
        body: "The overall answer rate is 74.1%, while the lowest individual agent sits at 79.1%, a 5-point gap below the weakest performer. An aggregate cannot fall below all of its parts unless calls are being lost outside individual handling: abandoned in queue, or arriving when no agent is available. This is the single most useful number on the dashboard and it is not one of the headline cards.",
      },
      {
        head: "The SLA is missed at every volume level, not just at peak",
        body: "In the volume-versus-response scatter, every plotted point sits above the 60-second SLA line, including the low-load observations in the “good” quadrant. Peak volume makes response worse, but the baseline is already failing. A capacity fix aimed only at peak hours would still leave the SLA unmet.",
      },
      {
        head: "Resolution is the only target being beaten",
        body: "90.0% against an 85% target. Once a caller reaches an agent, the interaction goes well. Every failing metric is measured over a population that includes calls which never got that far, which locates the problem in access rather than in handling.",
      },
      {
        head: "CSAT is falling while everything else improves",
        body: "Day over day, answer rate rose from 64.0% to 74.1%, resolution from 87.5% to 90.0%, and speed improved from 75.0 to 67.5 seconds. CSAT went the other way, from 3.7 to 3.40. On a single day that could be noise, but if the pattern holds, the metrics being optimised are not the ones driving satisfaction, and that is worth knowing before more effort goes into them.",
      },
    ],
    matters: [
      "The obvious intervention here is agent coaching, and the data does not support it. A 3.5-point spread across eight agents cannot close a 16-point gap to target. Ruling that out early prevents spending on the wrong fix.",
      "The aggregate-below-every-agent gap reframes the problem entirely: from managing people to managing queue capacity and coverage. Those have different owners and different costs.",
      "Because the SLA is breached even at low volume, the response-time problem is structural rather than purely a peak-hour capacity issue. Staffing the peak alone would not fix it.",
      "Reporting resolution rate without answer rate would show a service beating its target. The two have different denominators, and only reading them together reveals that a quarter of callers never reach the service at all.",
    ],
    next: [
      "Measure abandonment directly (how many callers hang up, and at what wait time), since the 5-point gap between the centre and its weakest agent is currently inferred rather than observed.",
      "Check agent coverage against the hourly volume curve to find hours with no available agent, which would explain calls lost outside individual handling.",
      "Establish why the SLA is missed at low volume, since that cannot be a capacity explanation and points at process or routing.",
      "Track CSAT against wait time specifically, to test whether dissatisfaction originates before the conversation rather than during it.",
      "Extend beyond a single day. Every figure here is one day with a day-over-day comparison, which is enough to locate a problem and not enough to size it.",
    ],
    toolsDetail: [
      { group: "Preparation", items: "SQL, Excel, Power Query" },
      { group: "Analysis", items: "SQL: hourly aggregation, SLA breach logic" },
      { group: "Reporting", items: "Power BI, DAX target-variance measures" },
    ],
    deepDive:
      "The repository holds the SQL behind the hourly aggregation, the SLA breach logic, and the Power BI measures.",
    shots: [
      {
        file: "1 call-center-performance-overview.png",
        title: "Call centre performance overview",
        notice:
          "Three things to notice, in order. The four KPI cards: only resolution (90.0% vs 85%) beats its target. The agent table: answer rates run 79.1% to 82.6%, a 3.5-point spread, and every one of them above the centre's own 74.1%. The scatter at the bottom: every point sits above the 60-second SLA line, including the low-volume ones in the “good” quadrant.",
      },
    ],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const ADDITIONAL = PROJECTS.filter((p) => !p.featured);

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Repositories                                                        */
/* ------------------------------------------------------------------ */

export const REPOS = [
  {
    name: "Last-Mile-Delivery-Performance-Optimization-Analytics",
    desc: "5.87M+ logistics transactions. SLA, delay and courier performance analysis.",
    url: "https://github.com/FatemaAkhtar/Last-Mile-Delivery-Performance-Optimization-Analytics",
  },
  {
    name: "Mortgage-Backed-Securities-Risk-Analytics-Business-Intelligence",
    desc: "500K+ records processed, 291K active loans analysed. Delinquency and portfolio exposure.",
    url: "https://github.com/FatemaAkhtar/Mortgage-Backed-Securities-Risk-Analytics-Business-Intelligence",
  },
  {
    name: "Startup-Outcome-Prediction",
    desc: "196K+ startup records. Classification models and feature analysis.",
    url: "https://github.com/FatemaAkhtar/Startup-Outcome-Prediction",
  },
  {
    name: "call-center-performance-intelligence",
    desc: "Peak-hour bottlenecks, answer rate and SLA response analysis.",
    url: "https://github.com/FatemaAkhtar/call-center-performance-intelligence",
  },
  {
    name: "Sales-Insights-Project",
    desc: "185,950 electronics orders in Excel. Pivot-driven dashboard covering month, city, hour and product.",
    url: "https://github.com/FatemaAkhtar/Sales-Insights-Project",
  },
  {
    name: "Swiggy-Case-Study-Sql",
    desc: "Ten business questions in MySQL across a seven-table food-delivery schema. Joins, CTEs and window functions.",
    url: "https://github.com/FatemaAkhtar/Swiggy-Case-Study-Sql",
  },
];
