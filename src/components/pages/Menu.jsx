import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../layout/Footer.jsx";
import MenuHero from "../menu/MenuHero.jsx";
import MenuFilter from "../menu/MenuFilter.jsx";
import MenuGrid from "../menu/MenuGrid.jsx";
import { categories, drinkTags, menuItems } from "../data/menuData.js";

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
  const activeTagData = drinkTags.find((t) => t.id === activeTag);

  const visibleItems = menuItems
    .filter(
      (item) => activeCategory === "all" || item.category === activeCategory,
    )
    .filter((item) => !activeTag || item.tag === activeTag);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveTag(null); // manually picking a category clears any tag filter
  };

  const handleSelectTag = (tagId) => {
    setActiveCategory("drinks"); // tags are always a subset of Drinks
    setActiveTag(tagId);
  };

  return (
    <>
      <MenuHero />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
          <MenuFilter
            categories={categories}
            tags={drinkTags}
            activeCategory={activeCategory}
            activeTag={activeTag}
            onSelectCategory={handleSelectCategory}
            onSelectTag={handleSelectTag}
          />
          <h2
            className="font-bold text-black text-right"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {activeTagData?.label ?? activeCategoryData.label}
          </h2>
        </div>

        <MenuGrid items={visibleItems} />
      </section>

      <Footer />
    </>
  );
}

export default Menu;
