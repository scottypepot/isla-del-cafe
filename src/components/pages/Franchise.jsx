import Footer from "../layout/Footer.jsx";
import FranchiseHero from "../franchise/FranchiseHero.jsx";
import FranchiseForm from "../franchise/FranchiseForm.jsx";

function Franchise() {
  return (
    <>
      <FranchiseHero />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid overflow-hidden rounded-xl border border-isla-black/10 shadow-xl md:grid-cols-5">
          <FranchiseForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Franchise;
