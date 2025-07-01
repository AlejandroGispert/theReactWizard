import "./Navbar.css";
import { useLocation } from "react-router-dom";
import React from "react";

export function Navbar() {
  const location = useLocation();

  React.useEffect(() => {
    if (
      location.pathname === "/portfolio" ||
      location.pathname === "/services" ||
      location.pathname === "/contact"
    ) {
      import("./Navbar2.css");
    } else if (location.pathname === "/") {
      import("./Navbar.css");
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="/" className="navbar-item">
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
