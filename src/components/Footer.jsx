import fblogo from "../assets/fb.png"
import insta from "../assets/ig.png"

const Footer = () => {
  return (
    <footer>
      <p>© 2025 MotoJohn</p>
      <div className="footer-socials">
        <a
          href="https://www.instagram.com/motogiannhs/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram MotoJohn"
        >
          <img
            src={insta}
            className="insta_icon"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.instagram.com/motogiannhs/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram MotoJohn"
        >
          <img src={fblogo} className="fb_icon" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
