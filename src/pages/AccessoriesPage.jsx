// pages/AccessoriesPage.jsx
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AccessoriesPage() {
  return (
    <>
    <Header/>
    <div style={{ padding: "2rem", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Αξεσουάρ</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProductCard title="Κράνος Jet" description="Ελαφρύ κράνος ιδανικό για πόλη" />
        <ProductCard title="Γάντια Δερμάτινα" description="Με προστασίες και αερισμό" />
        <ProductCard title="Σακίδιο Πλάτης" description="Αδιάβροχο και εργονομικό" />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AccessoriesPage;
