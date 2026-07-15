import { useEffect, useState } from "react";
import "./Navbar.css";

const aboutLinks = [
  { label: "About Us", href: "#introduction" },
  { label: "Our Team", href: "#cta" },
  { label: "Platform", href: "#what-we-offer" },
  { label: "Certification Process", href: "#benefits" },
];

const solutionLinks = [
  { label: "Healthcare Training", href: "#modern-hospitals" },
  { label: "Hospital Training Programs", href: "#who-we-serve" },
  { label: "Aged Care Training Programs", href: "#who-we-serve" },
  { label: "Training For Healthcare Professionals", href: "#who-we-serve" },
  { label: "Hospital Licensing Packages", href: "#what-we-offer" },
  { label: "Implementation Process", href: "#benefits" },
  { label: "ROI for Hospital", href: "#benefits" },
];

const courseLinks = [
  { label: "Emergency & Safety Courses", href: "#what-we-offer" },
  { label: "Quality & Accreditation Courses", href: "#what-we-offer" },
  { label: "Hospital Administration Courses", href: "#what-we-offer" },
  { label: "TPA and Billing Courses", href: "#what-we-offer" },
  { label: "Nursing Skill Courses", href: "#what-we-offer" },
  { label: "Patient Safety", href: "#what-we-offer" },
  { label: "Infection Control Courses", href: "#what-we-offer" },
];

const resourceLinks = [
  { label: "Healthcare Insights", href: "#introduction" },
  { label: "Infection Control Resources", href: "#what-we-offer" },
  { label: "Patient Safety Articles", href: "#what-we-offer" },
  { label: "Healthcare Training Guides", href: "#modern-hospitals" },
  { label: "Case Studies", href: "#regions" },
  { label: "Whitepapers", href: "#benefits" },
  { label: "Learning Experience", href: "#cta" },
];

function NavDropdown({ label, items }) {
  return (
    <li className="nav-item nav-item--dropdown">
      <button type="button" className="nav-link nav-link--dropdown">
        {label}
        <span className="nav-caret" aria-hidden="true" />
      </button>
      <ul className="nav-dropdown">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__mark" aria-hidden="true">
            M
          </span>
          <span className="navbar__name">
            Med<span>Tara</span>
          </span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <NavDropdown label="About" items={aboutLinks} />
            <NavDropdown label="Solutions" items={solutionLinks} />
            <NavDropdown label="Courses" items={courseLinks} />
            <li className="nav-item">
              <a className="nav-link" href="#who-we-serve" onClick={closeMenu}>
                Community
              </a>
            </li>
            <NavDropdown label="Resources" items={resourceLinks} />
            <li className="nav-item">
              <a className="nav-link" href="#benefits" onClick={closeMenu}>
                FAQ
              </a>
            </li>
          </ul>

          <a className="btn btn-primary navbar__cta" href="#cta" onClick={closeMenu}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
