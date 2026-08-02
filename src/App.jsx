import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Favorites from "./components/sections/Favorites";
import LocationsCTA from "./components/sections/LocationsCTA";
import DeliveryPartners from "./components/sections/DeliveryPartners";

function App() {
  return (
    <div className="min-h-screen bg-isla-cream">
      <Navbar />
      <Hero />
      <Favorites />
      <LocationsCTA />
      <DeliveryPartners />
      <Footer />
    </div>
  );
}

export default App;
