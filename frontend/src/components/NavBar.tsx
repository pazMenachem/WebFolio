/**
 * Simple navigation bar for the app.
 */
export default function NavBar() {
    return (
      <nav className="navbar">
        <span className="navbar-title">Pazfolio</span>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">ToDos</a>
          <a href="#">Projects</a>
        </div>
      </nav>
    );
  }