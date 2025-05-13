import { Link } from "react-router-dom";
import { JSX } from "react";

export default function NavBar(): JSX.Element {
    return (
      <nav className="navbar">
        <span className="navbar-title">WebFolio</span>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/professional">Professional</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    );
  }
  