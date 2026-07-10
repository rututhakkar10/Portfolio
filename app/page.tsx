import Clock from "./Clock";
import {
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  CloudIcon,
  CodeIcon,
  MailIcon,
} from "./icons";

// Update these with your real links.
const LINKEDIN_URL = "https://www.linkedin.com/in/rutu--lathiya";
const EMAIL = "rutu.thakkar.work@gmail.com";

const doodles = [
  { pos: 1, label: "Frontend", Icon: FrontendIcon },
  { pos: 2, label: "Backend", Icon: BackendIcon },
  { pos: 3, label: "Databases", Icon: DatabaseIcon },
  { pos: 4, label: "Cloud", Icon: CloudIcon },
  { pos: 5, label: "Craft", Icon: CodeIcon },
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
          {doodles.map(({ pos, label, Icon }) => (
            <div key={pos} className={`doodle doodle--${pos}`}>
              <Icon className="doodle__icon" />
              <span className="doodle__label">{label}</span>
            </div>
          ))}

          {/* The mailbox is a real link — say hello */}
          <a
            className="doodle doodle--6 doodle--link"
            href={`mailto:${EMAIL}`}
          >
            <MailIcon className="doodle__icon" />
            <span className="doodle__label">Say hello</span>
          </a>
        </div>

        <section className="intro">
          <span className="badge">
            <span className="badge__dot" aria-hidden="true" />
            <span>Portfolio in the works</span>
          </span>

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
