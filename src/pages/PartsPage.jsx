import ProductCard from "../components/ProductCard";

function PartsPage() {
  return (
    <div style={{ padding: "2rem", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Ανταλλακτικά & Ελαστικά
      </h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProductCard title="Φίλτρο Αέρα" description="Υψηλής απόδοσης για sport μηχανές" />
        <ProductCard title="Λάστιχο Dunlop" description="120/70ZR17 μαλακής γόμας" />
        <ProductCard title="Μπουζί Iridium" description="Για καλύτερη καύση και απόδοση" />
      </div>
    </div>
  );
}

export default PartsPage;
    