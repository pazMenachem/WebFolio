import { NavLink } from "react-router-dom";
import { JSX, useState } from "react";
import { NAV_LINKS } from "../consts/NavConsts";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Main">
      <div className="navbar-bar">
        <NavLink to="/" className="navbar-title" onClick={close}>
          Paz Menachem
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="navbar-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="navbar-links"
        className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
            onClick={close}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
