import Link from "next/link";

type NavKey = "home" | "about" | "skills" | "projects" | "achievements";

type NavProps = { active?: NavKey };

const links: { href: string; label: string; key: NavKey }[] = [
  { href: "/", label: "home", key: "home" },
  { href: "/about", label: "about", key: "about" },
  { href: "/skills", label: "skills", key: "skills" },
  { href: "/projects", label: "projects", key: "projects" },
  { href: "/achievements", label: "achievements", key: "achievements" },
];

export default function SiteNav({ active }: NavProps) {
  return (
    <header className="topbar topbar--page">
      <Link href="/" className="brand">
        rutu
      </Link>
      <nav className="nav">
        {links.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            className={`nav__link ${active === l.key ? "nav__link--active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
