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
  placeholder?: boolean;
};

const achievements: Achievement[] = [
  {
    title: "Promoted to Software Engineer",
    detail:
      "Advanced from Associate Software Engineer to Software Engineer at TechHolding, taking ownership of high-performance Next.js and TypeScript applications.",
    meta: "TechHolding · 2023",
  },
  {
    title: "MCA — 8.14 CGPA",
    detail:
      "Master of Computer Applications at GLS Institute of Computer Technology.",
    meta: "GLS Institute · 2022–2023",
  },
  {
    title: "BCA — 9.49 CGPA",
    detail:
      "Bachelor of Computer Applications at Sardar Patel University, graduating with distinction.",
    meta: "Sardar Patel University",
  },
  {
    title: "Add your own",
    detail:
      "Certifications, hackathon wins, published work, or talks belong here — edit app/achievements/page.tsx to add them.",
    placeholder: true,
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
