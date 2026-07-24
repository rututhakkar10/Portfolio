import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../SiteNav";

export const metadata: Metadata = {
  title: "Projects — Rutu Lathiya",
  description:
    "Selected projects by Rutu Lathiya — commerce platforms, CMS-driven sites, and cloud data pipelines built with Next.js, Node.js, and more.",
};

// Seeded from real work described in the résumé.
// Add a `href` to any project to turn its title into a live link.
type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Ticketing & Hospitality Platform",
    blurb:
      "A commerce platform managing inventory, products, packages, and orders. Extended Medusa CMS (v2) with custom endpoints, plugins, and admin-UI integrations, and built modular commerce features on top of custom and existing models.",
    tags: ["Medusa CMS v2", "Next.js", "TypeScript", "Commerce"],
  },
  {
    title: "Hospitality CMS Solution",
    blurb:
      "A content-driven hospitality experience built with Payload CMS and Next.js — enhancing content management and delivering dynamic rendering of CMS-driven pages.",
    tags: ["Payload CMS", "Next.js", "TypeScript"],
  },
  {
    title: "Modern Web Application",
    blurb:
      "Served as frontend engineer on a web app built entirely with Next.js (App Router) and Tailwind CSS, integrating APIs via Axios in close collaboration with backend teams for consistent data handling.",
    tags: ["Next.js (App Router)", "Tailwind CSS", "Axios", "REST"],
  },
  {
    title: "Third-Party Data Ingestion Service",
    blurb:
      "Designed and implemented a cloud function for seamless data ingestion from third-party systems, backed by robust RESTful APIs and GraphQL — running on GCP Pub/Sub, Cloud Functions, and Cloud Storage.",
    tags: ["GCP", "Node.js", "GraphQL", "PostgreSQL", "React"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page">
      <SiteNav active="projects" />

      <div className="page__inner">
        <header className="page-head">
          <p className="eyebrow">things I&rsquo;ve helped build</p>
          <h1 className="page-title">Projects</h1>
          <p className="lede">
            A selection of the products and systems I&rsquo;ve worked on &mdash;
            from commerce and CMS-driven platforms to event-driven cloud
            services.
          </p>
        </header>

        <section className="skills-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <h2 className="project-card__title">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u u--link"
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h2>
              <p className="project-card__blurb">{p.blurb}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <p className="page-foot">
          Want the context behind these?{" "}
          <Link className="u u--link" href="/about">
            Read about my experience &rarr;
          </Link>
        </p>
      </div>
    </main>
  );
}
