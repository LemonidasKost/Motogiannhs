import React from "react";
import { useEffect } from "react";

import sprocket from "../assets/sprocket.png";
import wrench from "../assets/wrench.png";
import speed from "../assets/speed.png";
import motot from "../assets/mototimeline.png";
import ecu from "../assets/ecu.png"
import ana from "../assets/anakataskevi.png"
import foto from "../assets/oreaphoto.png"

import img1 from "../assets/carousel/1.jpg";
import img2 from "../assets/carousel/2.jpg";
import img3 from "../assets/carousel/3.jpg";
import img4 from "../assets/carousel/4.jpg";
import img5 from "../assets/carousel/5.jpg";
import img6 from "../assets/carousel/6.png";
import img7 from "../assets/carousel/7.png";
import img8 from "../assets/carousel/8.png";
import img9 from "../assets/carousel/9.png";
import img10 from "../assets/carousel/10.png";
import img11 from "../assets/carousel/11.jpg";
import img12 from "../assets/carousel/12.png";
import img13 from "../assets/carousel/13.png";
import img14 from "../assets/carousel/14.jpg";
import img16 from "../assets/carousel/14.png";
import img15 from "../assets/carousel/15.jpg";
const carouselImages = [
  img1, img2, img3, img4, img5,img6, img7, img8, img9, img10,img11, img12, img13, img14, img15, img16,
  // ξαναπέρνα τα αν θες looping
];


const Home = () => {
  useEffect(() => {
    const timeline = document.querySelector(".race-timeline");
    const moto = document.querySelector(".race-moto");

    if (timeline && moto) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              moto.classList.remove("animate");
              void moto.offsetWidth; // reflow για reset
              moto.classList.add("animate");
            } else {
              moto.classList.remove("animate");
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(timeline);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text-small">EST. APRIL 2009</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-visual">
        <div className="about-flex-container">
          <div className="about-text">
            <h2>Η Επιχείρηση Μας</h2>
            <div className="race-timeline">
              <span className="race-label">2009</span>
              <div className="race-line-container">
                <div className="race-line"></div>
                <div className="race-moto">
                  <img src={motot} alt="Μηχανάκι" />
                </div>
              </div>
              <span className="race-today">Σήμερα</span>
            </div>

            <p>
              Το συνεργείο μας αποτελεί ισχυρή παρουσία στο χώρο των
              μοτοσυκλετών στη Λέσβο από το 2009. Αναλαμβάνουμε επισκευές,
              συντηρήσεις, δυναμομετρήσεις, προγραμματισμούς ECU και
              Ανακατασκευές.
            </p>

            <p>
              Οι σύγχρονες εγκαταστάσεις μας καλύπτουν κάθε ανάγκη σε
              ανταλλακτικά και επαγγελματικό service. Εμπιστευτείτε την εμπειρία
              μας για ένα άψογο και αξιόπιστο αποτέλεσμα.
            </p>
          </div>

          <div className="about-image">
            <img src={foto} alt="Moto John Art" />
          </div>
        </div>
      </section>

      {/* Scroll Gallery */}
      <section className="scroll-gallery">
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {carouselImages.map((imageSrc, index) => (
              <div className="img-wrapper" key={index}>
              <img src={imageSrc} alt={`Εικόνα ${index}`} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Οι Υπηρεσίες Μας</h2>
        <div className="service-grid">
          <div className="service-card">
            <img
              src={sprocket}
              alt="Service Icon"
              className="service-icon"
            />
            <h3>Service</h3>
            <p>Πλήρης έλεγχος & συντήρηση μηχανών</p>
          </div>

          <div className="service-card">
            <img
              src={speed}
              alt="Dyno Icon"
              className="service-icon"
            />
            <h3>Δυναμομετρήσεις</h3>
            <p>Ακρίβεια στην απόδοση και ανάλυση ισχύος</p>
          </div>

          <div className="service-card">
            <img
              src={ecu}
              alt="ECU Icon"
              className="service-icon"
            />
            <h3>Προγραμματισμός ECU</h3>
            <p>Ρυθμίσεις εγκεφάλου για απόλυτη απόδοση</p>
          </div>

          <div className="service-card">
            <img
              src={wrench}
              alt="Repair Icon"
              className="service-icon"
            />
            <div className="card-content">
              <h3>Επισκευές</h3>
              <p>Μηχανικές & ηλεκτρικές επισκευαστικές εργασίες</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src={ana}
              className="service-icon moto-icon"
              alt="Μηχανή"
            />
            <div className="card-content">
              <div className="rebuild-text">
                <h3>Ανακατασκευές</h3>
                <p>
                  Αναβίωση & ανακατασκευή κινητήρων και μοτοσυκλετών
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-hero">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>Καλέστε μας</h3>
            <p>📞 Κιν. : 6937663254</p>
            <p>Τηλ.: 22510 32524</p>
            <p>Email: motogiannis@gmail.com</p>
          </div>

          <div className="contact-box">
            <h3>Επισκεφτείτε μας</h3>
            <p>📍 Πάμφιλα, ΤΚ 81100</p>
            <p>Λέσβος</p>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.305176444109!2d26.5205505!3d39.1540809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba66b101cf62ab%3A0x324f093d847efd5c!2zTcOzb3RvIEdpw6Fubmlz!5e0!3m2!1sel!2sgr!4v1720108500000!5m2!1sel!2sgr"
                width="100%"
                height="220"
                style={{ border: 0, marginTop: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MotoJohn Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-box">
            <h3>Ωράριο Λειτουργίας</h3>
            <p>Δευτέρα: 08:00 – 16:00</p>
            <p>Τρίτη: 08:30 – 20:00</p>
            <p>Τετάρτη: 08:00 – 16:00</p>
            <p>Πέμπτη: 08:30 – 20:00</p>
            <p>Παρασκευή: 08:30 – 20:00</p>
            <p>Σάββατο: 08:00 – 16:00</p>
            <p>Κυριακή: Κλειστά</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
