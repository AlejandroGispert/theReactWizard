import "./Navbar.css";
export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="/about" className="navbar-item">
            Home
          </a>
          <a href="/portfolio" className="navbar-item">
            Portfolio
          </a>
          <a href="/services" className="navbar-item">
            Services
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
