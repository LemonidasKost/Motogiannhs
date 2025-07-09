
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <Link
        to="/"
        className="header-left"
        style={{ display: "flex", alignItems: "center", gap: "24px" }}
      >
        <img
          src="images/motojohn-logo.jpg"
          alt="MotoJohn Logo"
          className="logo-icon"
        />
        <div className="logo-text">
          <h1>Moto Repair Services</h1>
        </div>
      </Link>

      <nav className="header-nav">
        <a href="#home">Αρχική</a>
        <a href="#services">Υπηρεσίες</a>

        <div className="dropdown">
          <a href="#products" className="dropbtn">Προϊόντα</a>
          <div className="dropdown-content">
            <a href="#accesories">Αξεσουάρ</a>
            <a href="#parts">Ανταλλακτικά & Ελαστικά</a>
            <a href="#moto">Κράνη</a>
          </div>
        </div>

        <a href="#contact">Επικοινωνία</a>
      </nav>
    </header>
  );
};

export default Header;
