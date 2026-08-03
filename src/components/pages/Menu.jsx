import { useState } from "react";
import Footer from "../layout/Footer.jsx";
import MenuHero from "../menu/MenuHero.jsx";
import MenuFilterSidebar from "../menu/MenuFilterSidebar.jsx";
import MenuGrid from "../menu/MenuGrid.jsx";
import { categories, menuItems } from "../data/menuData.js";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  const visibleItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <MenuHero />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <MenuFilterSidebar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
          <MenuGrid heading={activeCategoryData.label} items={visibleItems} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Menu;
