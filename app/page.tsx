import Link from "next/link";
import Clock from "./Clock";
import {
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
  AchievementsIcon,
} from "./icons";

// Update these with your real links.
const LINKEDIN_URL = "https://www.linkedin.com/in/rutu--lathiya";
const EMAIL = "rutu.thakkar.work@gmail.com";

// The scattered doodles double as the site map — each links to a section.
const doodles = [
  { pos: 1, label: "About", href: "/about", Icon: AboutIcon },
  { pos: 2, label: "Skills", href: "/skills", Icon: SkillsIcon },
  { pos: 3, label: "Projects", href: "/projects", Icon: ProjectsIcon },
  { pos: 4, label: "Achievements", href: "/achievements", Icon: AchievementsIcon },
];

export default function Home() {
  return (
    <>
      {/* Hand-drawn wobble filter, applied to icons via CSS */}
      <svg width="0" height="0" className="sketch-defs" aria-hidden="true">
        <defs>
          <filter id="sketch">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <main className="stage">
        <header className="topbar">
          <span className="topbar__note topbar__note--left">hello, world :)</span>
          <span className="brand">rutu</span>
          <span className="topbar__note topbar__note--right">since &rsquo;22</span>
        </header>

        <div className="doodles">
          {doodles.map(({ pos, label, href, Icon }) => (
            <Link
              key={pos}
              href={href}
              className={`doodle doodle--${pos} doodle--link`}
            >
              <Icon className="doodle__icon" />
              <span className="doodle__label">{label}</span>
            </Link>
          ))}
        </div>

        <section className="intro">
          <p className="eyebrow">Welcome &mdash; my little corner of the web</p>

          <h1 className="headline">
            Hi, I am Rutu, a{" "}
            <a
              className="u u--link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              full-stack engineer
            </a>{" "}
            who likes building for the web, wrangling the{" "}
            <span className="u">cloud</span>
            {", and shipping delightful, scalable products."}
          </h1>

          <p className="soon">
            A proper portfolio is on its way. Until then, feel free to reach out.
          </p>

          <div className="actions">
            <a
              className="pill pill--primary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="pill" href={`mailto:${EMAIL}`}>
              Email me
            </a>
          </div>
        </section>

        <footer className="footer-wrap">
          <Clock />
        </footer>
      </main>
    </>
  );
}
