import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../SiteNav";
import SketchDefs from "../SketchDefs";
import {
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  CloudIcon,
  CodeIcon,
} from "../icons";

export const metadata: Metadata = {
  title: "Skills — Rutu Lathiya",
  description:
    "The tools, languages, and platforms Rutu Lathiya works with — from React and Next.js to Node.js, AWS, GCP, and more.",
};

const groups = [
  {
    label: "Frontend",
    Icon: FrontendIcon,
    items: ["React", "Next.js (incl. App Router)", "Tailwind CSS"],
  },
  {
    label: "Backend",
    Icon: BackendIcon,
    items: ["Node.js", "Express.js", "REST", "GraphQL"],
  },
  {
    label: "Databases & ORMs",
    Icon: DatabaseIcon,
    items: ["PostgreSQL", "MongoDB", "Firebase", "MySQL", "Prisma", "Sequelize"],
  },
  {
    label: "Cloud",
    Icon: CloudIcon,
    items: [
      "AWS — EC2, S3, Lambda, SQS, SNS",
      "GCP — Pub/Sub, Cloud Functions",
    ],
  },
  {
    label: "Languages & Tools",
    Icon: CodeIcon,
    items: ["JavaScript", "TypeScript", "Git", "Docker", "Axios"],
  },
  {
    label: "CMS",
    Icon: BackendIcon,
    items: ["Medusa CMS (v2)", "Payload CMS"],
  },
];

export default function SkillsPage() {
  return (
    <>
      <SketchDefs />
      <main className="page">
        <SiteNav active="skills" />

        <div className="page__inner">
          <header className="page-head">
            <p className="eyebrow">the stack I reach for</p>
            <h1 className="page-title">Skills &amp; tooling</h1>
            <p className="lede">
              A snapshot of the languages, frameworks, and platforms I use to
              build responsive, scalable products &mdash; end to end.
            </p>
          </header>

          <section className="skills-grid">
            {groups.map(({ label, Icon, items }) => (
              <article className="skill-card" key={label}>
                <div className="skill-card__head">
                  <Icon className="skill-card__icon" />
                  <h2 className="skill-card__title">{label}</h2>
                </div>
                <ul className="chips">
                  {items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <p className="page-foot">
            Curious how I&rsquo;ve put these to work?{" "}
            <Link className="u u--link" href="/about">
              Read about my experience &rarr;
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
