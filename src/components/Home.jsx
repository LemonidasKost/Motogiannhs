import React from "react";

const Home = () => {
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
                  <img src="images/motorbike.png" alt="Μηχανάκι" />
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
            <img src="images/kalografiti.jpg" alt="Moto John Art" />
          </div>
        </div>
      </section>

      {/* Scroll Gallery */}
      <section className="scroll-gallery">
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {[
              "11.jpg", "1.jpg", "15.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
              "6.png", "7.png", "8.png", "9.png", "10.png", "12.png", "14.jpg",
              "11.jpg", "1.jpg", "2.jpg", "3.jpg",
            ].map((filename, index) => (
              <div className="img-wrapper" key={index}>
                <img src={`images/${filename}`} alt={`Εικονίδιο ${index}`} />
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
              src="images/sprocket.png"
              alt="Service Icon"
              className="service-icon"
            />
            <h3>Service</h3>
            <p>Πλήρης έλεγχος & συντήρηση μηχανών</p>
          </div>

          <div className="service-card">
            <img
              src="images/speed.png"
              alt="Dyno Icon"
              className="service-icon"
            />
            <h3>Δυναμομετρήσεις</h3>
            <p>Ακρίβεια στην απόδοση και ανάλυση ισχύος</p>
          </div>

          <div className="service-card">
            <img
              src="images/ecu.png"
              alt="ECU Icon"
              className="service-icon"
            />
            <h3>Προγραμματισμός ECU</h3>
            <p>Ρυθμίσεις εγκεφάλου για απόλυτη απόδοση</p>
          </div>

          <div className="service-card">
            <img
              src="images/wrench.png"
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
              src="images/anakataskevi.png"
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
