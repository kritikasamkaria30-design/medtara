import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const aboutLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Our Team", to: "/our-team" },
  { label: "Platform", to: "/about-us#partner" },
  { label: "Certification Process", to: "/about-us#mission-vision" },
];

const solutionLinks = [
  { label: "Healthcare Training", to: "/#modern-hospitals" },
  { label: "Hospital Training Programs", to: "/#who-we-serve" },
  { label: "Aged Care Training Programs", to: "/#who-we-serve" },
  { label: "Training For Healthcare Professionals", to: "/#who-we-serve" },
  { label: "Hospital Licensing Packages", to: "/#what-we-offer" },
  { label: "Implementation Process", to: "/#benefits" },
  { label: "ROI for Hospital", to: "/#benefits" },
];

const courseLinks = [
  { label: "Emergency & Safety Courses", to: "/#what-we-offer" },
  { label: "Quality & Accreditation Courses", to: "/#what-we-offer" },
  { label: "Hospital Administration Courses", to: "/#what-we-offer" },
  { label: "TPA and Billing Courses", to: "/#what-we-offer" },
  { label: "Nursing Skill Courses", to: "/#what-we-offer" },
  { label: "Patient Safety", to: "/#what-we-offer" },
  { label: "Infection Control Courses", to: "/#what-we-offer" },
];

const resourceLinks = [
  { label: "Healthcare Insights", to: "/#introduction" },
  { label: "Infection Control Resources", to: "/#what-we-offer" },
  { label: "Patient Safety Articles", to: "/#what-we-offer" },
  { label: "Healthcare Training Guides", to: "/#modern-hospitals" },
  { label: "Case Studies", to: "/#regions" },
  { label: "Whitepapers", to: "/#benefits" },
  { label: "Learning Experience", to: "/#cta" },
];

function NavDropdown({ label, items, onNavigate }) {
  return (
    <li className="nav-item nav-item--dropdown">
      <button type="button" className="nav-link nav-link--dropdown">
        {label}
        <span className="nav-caret" aria-hidden="true" />
      </button>
      <ul className="nav-dropdown">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} onClick={onNavigate}>
              {item.label}
            </Link>
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
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__mark" aria-hidden="true">
            M
          </span>
          <span className="navbar__name">
            Med<span>Tara</span>
          </span>
        </Link>

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
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link--active" : ""}`
                }
                to="/"
                end
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <NavDropdown label="About" items={aboutLinks} onNavigate={closeMenu} />
            <NavDropdown
              label="Solutions"
              items={solutionLinks}
              onNavigate={closeMenu}
            />
            <NavDropdown label="Courses" items={courseLinks} onNavigate={closeMenu} />
            <li className="nav-item">
              <Link className="nav-link" to="/#who-we-serve" onClick={closeMenu}>
                Community
              </Link>
            </li>
            <NavDropdown
              label="Resources"
              items={resourceLinks}
              onNavigate={closeMenu}
            />
            <li className="nav-item">
              <Link className="nav-link" to="/#benefits" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
          </ul>

          <Link className="btn btn-primary navbar__cta" to="/#cta" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
