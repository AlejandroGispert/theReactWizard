import "./Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function Navbar() {
  const handleDemoClick = (pageName: string) => {
    toast.info(
      `This is a demo page only - ${pageName} coming soon! Mvh Alejandro`,
      {
        duration: 2000,
      }
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item cursor-pointer">
            Home
          </Link>
          <Link
            to="/"
            className="navbar-item cursor-pointer"
            onClick={() => handleDemoClick("Portfolio")}
          >
            Portfolio
          </Link>
          <Link
            to="/"
            className="navbar-item cursor-pointer"
            onClick={() => handleDemoClick("Services")}
          >
            Services
          </Link>
          <Link
            to="/"
            className="navbar-item cursor-pointer"
            onClick={() => handleDemoClick("Contact")}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
