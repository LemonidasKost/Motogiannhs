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
        <Link to="/">Αρχική</Link>
        <Link to="/accesories">Αξεσουάρ</Link>
        <Link to="/parts">Ανταλλακτικά & Ελαστικά</Link>
        <Link to="/helmets">Κράνη</Link>
        <a href="#contact">Επικοινωνία</a> {/* ή Link αν είναι ξεχωριστή σελίδα */}
      </nav>
    </header>
  );
};

export default Header;
