import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../SiteNav";

const LINKEDIN_URL = "https://www.linkedin.com/in/rutu--lathiya";
const GITHUB_URL = "https://github.com/RutuThakkar510";
const EMAIL = "rutu.thakkar.work@gmail.com";

export const metadata: Metadata = {
  title: "About — Rutu Lathiya",
  description:
    "About Rutu Lathiya — a full-stack engineer with 4+ years of experience building responsive, scalable web applications.",
};

const experience = [
  {
    company: "TechHolding",
    role: "Software Engineer",
    period: "2023 — Present",
    points: [
      "Developed and maintained high-performance web applications using Next.js and TypeScript, focusing on responsiveness and scalability.",
      "Worked on a ticketing and hospitality platform managing inventory, products, packages, and orders using Medusa CMS (v2) with custom and existing models.",
      "Implemented modular commerce features and extended Medusa CMS with custom endpoints, plugins, and admin UI integrations.",
      "Contributed to a hospitality solution built with Payload CMS and Next.js, enhancing content management and dynamic rendering of CMS-driven pages.",
      "Served as frontend engineer on a modern web app built entirely with Next.js (App Router) and Tailwind CSS, delivering a seamless user experience.",
      "Integrated APIs using Axios and collaborated with backend teams for consistent data handling; used AWS (EC2, S3, Lambda, SQS, SNS) for scalable, event-driven workflows.",
    ],
  },
  {
    company: "TechHolding",
    role: "Associate Software Engineer",
    period: "2022 — 2023",
    points: [
      "Actively contributed to a project using TypeScript, Node.js, PostgreSQL, GraphQL, and React.",
      "Implemented React hooks and leveraged GraphQL to enhance functionality and performance.",
      "Developed robust RESTful APIs and used GCP services such as Pub/Sub, Cloud Functions, and Cloud Storage.",
      "Designed and implemented a cloud function responsible for seamless data ingestion from third-party systems.",
    ],
  },
];

const education = [
  {
    degree: "Masters of Computer Applications (MCA)",
    school: "GLS Institute of Computer Technology",
    score: "8.14 CGPA",
    period: "2022 — 2023",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Sardar Patel University",
    score: "9.49 CGPA",
    period: "",
  },
];

const languages = [
  { name: "English", level: "Fluent (written & spoken)" },
  { name: "Hindi", level: "Fluent (written & spoken)" },
  { name: "Gujarati", level: "Native speaker" },
];

export default function AboutPage() {
  return (
    <main className="page">
      <SiteNav active="about" />

      <div className="page__inner">
        <header className="page-head">
          <p className="eyebrow">a little more about me</p>
          <h1 className="page-title">
            Hi, I&rsquo;m Rutu &mdash; a full-stack engineer.
          </h1>
          <p className="lede">
            Results-driven software engineer with 4+ years of experience in
            full-stack development, specializing in JavaScript (Node.js &amp;
            React), TypeScript, GraphQL, and databases such as PostgreSQL,
            MongoDB, and Firebase. I build responsive web apps with Next.js and
            work across cloud platforms including GCP and AWS &mdash; adapting
            quickly to new stacks and shipping scalable solutions.
          </p>
          <p className="lede">
            Over the past few years I&rsquo;ve grown from an associate engineer
            into someone who owns features end to end &mdash; architecting
            commerce and CMS-driven platforms, extending headless systems like
            Medusa and Payload, and building event-driven cloud services. I care
            about clean, maintainable code, thoughtful collaboration with
            cross-functional teams, and shipping products that feel effortless to
            use.
          </p>
          <div className="actions actions--left">
            <a
              className="pill pill--primary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="pill" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="pill" href={`mailto:${EMAIL}`}>
              Email me
            </a>
          </div>
        </header>

        <section className="section">
          <h2 className="section__title">
            <span className="section__marker" aria-hidden="true" />
            Experience
          </h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <article className="job" key={`${job.company}-${i}`}>
                <div className="job__head">
                  <div>
                    <h3 className="job__role">{job.role}</h3>
                    <p className="job__company">{job.company}</p>
                  </div>
                  <span className="job__period">{job.period}</span>
                </div>
                <ul className="job__points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="two-col">
          <section className="section">
            <h2 className="section__title">
              <span className="section__marker" aria-hidden="true" />
              Education
            </h2>
            <div className="cards">
              {education.map((e, i) => (
                <article className="card" key={i}>
                  <h3 className="card__title">{e.degree}</h3>
                  <p className="card__sub">{e.school}</p>
                  <p className="card__meta">
                    {e.score}
                    {e.period ? ` · ${e.period}` : ""}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section__title">
              <span className="section__marker" aria-hidden="true" />
              Languages
            </h2>
            <div className="cards">
              {languages.map((l, i) => (
                <div className="lang" key={i}>
                  <span className="lang__name">{l.name}</span>
                  <span className="lang__level">{l.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <p className="page-foot">
          Want the full picture?{" "}
          <Link className="u u--link" href="/skills">
            See my skills &rarr;
          </Link>
        </p>
      </div>
    </main>
  );
}
