import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function HelmetsPage() {
  return (
    <>
    <Header/>
    <div style={{ padding: "2rem", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Κράνη</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProductCard title="Κράνος Jet" description="Ελαφρύ κράνος ιδανικό για πόλη" />
        <ProductCard title="Κράνος Full Face" description="Με προστασίες και αερισμό" />
        <ProductCard title="Κράνος Πλάτης" description="Αδιάβροχο και εργονομικό" />
      </div>
    </div>
    <Footer/></>
  );
}

export default HelmetsPage;
