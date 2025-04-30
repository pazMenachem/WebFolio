import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav className="navbar">
        <span className="navbar-title">Pazfolio</span>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/professional">Professional</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    );
  }