import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../layout/Footer.jsx";
import MenuHero from "../menu/MenuHero.jsx";
import MenuFilterSidebar from "../menu/MenuFilterSidebar.jsx";
import MenuGrid from "../menu/MenuGrid.jsx";
import { categories, menuItems } from "../data/menuData.js";

function Menu() {
  const [searchParams] = useSearchParams();
  const tagParam = searchParams.get("tag");

  const [activeCategory, setActiveCategory] = useState(
    tagParam ? "drinks" : "all",
  );
  const [activeTag, setActiveTag] = useState(tagParam);

  // Re-sync when the URL's ?tag= changes (e.g. clicking a different
  // Favorites card while already on the Menu page).
  useEffect(() => {
    setActiveCategory(tagParam ? "drinks" : "all");
    setActiveTag(tagParam);
  }, [tagParam]);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  const visibleItems = menuItems
    .filter(
      (item) => activeCategory === "all" || item.category === activeCategory,
    )
    .filter((item) => !activeTag || item.tag === activeTag);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveTag(null); // manually picking a category clears any tag filter from a Favorites link
  };

  return (
    <>
      <MenuHero />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <MenuFilterSidebar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={handleSelectCategory}
          />
          <MenuGrid heading={activeCategoryData.label} items={visibleItems} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Menu;
