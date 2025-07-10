import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/motojohn-logo.jpg"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Μικρή καθυστέρηση για να φορτώσει η αρχική πριν το scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="site-header">
      <Link
        to="/"
        className="header-left"
        style={{ display: "flex", alignItems: "center", gap: "24px" }}
      >
        <img
          src={logo}
          alt="MotoJohn Logo"
          className="logo-icon"
        />
        <div className="logo-text">
          <h1>Moto Repair Services</h1>
        </div>
      </Link>

      <nav className="header-nav">
        <button onClick={() => scrollToSection("home")} className="link-btn">
          Αρχική
        </button>
        <button onClick={() => scrollToSection("services")} className="link-btn">
          Υπηρεσίες
        </button>

        <div className="dropdown">
          <span className="dropbtn">Προϊόντα</span>
          <div className="dropdown-content">
            <Link to="/accesories">Αξεσουάρ</Link>
            <Link to="/parts">Ανταλλακτικά & Ελαστικά</Link>
            <Link to="/helmets">Κράνη</Link>
          </div>
        </div>

        <button onClick={() => scrollToSection("contact")} className="link-btn">
          Επικοινωνία
        </button>
      </nav>
    </header>
  );
};

export default Header;
