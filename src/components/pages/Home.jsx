import Navbar from "../layout/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import Favorites from "../sections//Favorites.jsx";
import LocationsCTA from "../sections/LocationsCTA.jsx";
import DeliveryPartners from "../sections/DeliveryPartners.jsx";
import Footer from "../layout/Footer.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/menu">Menu</Link>
      <Hero />
      <Favorites />
      <LocationsCTA />
      <DeliveryPartners />
      <Footer />
    </>
  );
}

export default Home;
