import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../SiteNav";
import SketchDefs from "../SketchDefs";
import { AchievementsIcon } from "../icons";

export const metadata: Metadata = {
  title: "Achievements — Rutu Lathiya",
  description:
    "Highlights, milestones, and recognition from Rutu Lathiya's career and studies.",
};

// Seeded from the résumé. Replace the placeholder entry with real awards,
// certifications, or talks — and add more items to the array as you go.
type Achievement = {
  title: string;
  detail: string;
  meta?: string;
  link?: string;
  placeholder?: boolean;
};

const achievements: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    detail:
      "Validated advanced expertise in designing distributed, secure, and cost-optimized architectures on AWS.",
    meta: "Amazon Web Services · Certification",
    link: "https://www.credly.com/badges/16fb81d9-b92d-4d72-9c5e-942e02ddfcdf/public_url",
  },
  {
    title: "Claude Certified Architect – Professional",
    detail:
      "Certified in architecting production AI solutions with Claude, from agent design to tool integration.",
    meta: "Anthropic · Certification",
    link: "https://www.credly.com/badges/57f581c3-0943-4a7c-bf2b-90432c772d32/public_url",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <SketchDefs />
      <main className="page">
        <SiteNav active="achievements" />

        <div className="page__inner">
          <header className="page-head">
            <p className="eyebrow">a few things I&rsquo;m proud of</p>
            <h1 className="page-title">Achievements</h1>
            <p className="lede">
              Milestones and recognition from my career and studies &mdash; the
              moments that mark the journey so far.
            </p>
          </header>

          <section className="section">
            <div className="cards">
              {achievements.map((a) => (
                <article
                  className={`achievement ${a.placeholder ? "achievement--ghost" : ""}`}
                  key={a.title}
                >
                  <span className="achievement__badge" aria-hidden="true">
                    <AchievementsIcon className="achievement__icon" />
                  </span>
                  <div className="achievement__body">
                    <h2 className="achievement__title">{a.title}</h2>
                    <p className="achievement__detail">{a.detail}</p>
                    {a.meta ? (
                      <p className="achievement__meta">{a.meta}</p>
                    ) : null}
                    {a.link ? (
                      <a
                        className="achievement__link u u--link"
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify credential &rarr;
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p className="page-foot">
            See how I got here &mdash;{" "}
            <Link className="u u--link" href="/about">
              my experience &rarr;
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
