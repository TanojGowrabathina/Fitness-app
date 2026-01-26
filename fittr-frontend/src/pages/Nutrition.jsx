import { useState } from "react";
import "../pages/Nutrition.css";

function Nutrition() {
  // Dummy data with nutrition images and links
  const nutritionCategories = {
    Proteins: [
      {
        id: 1,
        title: "Chicken Breast",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 2,
        title: "Salmon",
        image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 3,
        title: "Eggs",
        image: "https://images.unsplash.com/photo-1585238341710-4b4e6f7de4d0?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 4,
        title: "Tofu",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
    ],
    Carbohydrates: [
      {
        id: 5,
        title: "Brown Rice",
        image: "https://images.unsplash.com/photo-1586080876546-76eeb5a98db1?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 6,
        title: "Sweet Potato",
        image: "https://images.unsplash.com/photo-1584270354949-d573ca4e4ceb?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 7,
        title: "Whole Wheat Bread",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 8,
        title: "Oats",
        image: "https://images.unsplash.com/photo-1585519007990-dd86ca32f447?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
    ],
    Fats: [
      {
        id: 9,
        title: "Avocado",
        image: "https://images.unsplash.com/photo-1585878694917-71f47e832e7f?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 10,
        title: "Olive Oil",
        image: "https://images.unsplash.com/photo-1630639892935-f6adb1e9f1a8?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 11,
        title: "Almonds",
        image: "https://images.unsplash.com/photo-1585707372692-691415844913?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 12,
        title: "Coconut Oil",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
    ],
    Vegetables: [
      {
        id: 13,
        title: "Broccoli",
        image: "https://images.unsplash.com/photo-1537530601827-49b4b08dc199?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 14,
        title: "Spinach",
        image: "https://images.unsplash.com/photo-1511689915553-a15017d385e0?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 15,
        title: "Carrots",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 16,
        title: "Bell Peppers",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd4b77d?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
    ],
    Fruits: [
      {
        id: 17,
        title: "Bananas",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 18,
        title: "Blueberries",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd4b77d?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 19,
        title: "Apples",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
      {
        id: 20,
        title: "Oranges",
        image: "https://images.unsplash.com/photo-1599599810828-66e77c0d5e0f?w=300&h=200&fit=crop",
        link: "https://www.coursera.org/learn/nutrition-fundamentals",
      },
    ],
  };

  const handleScroll = (category, direction) => {
    const carousel = document.getElementById(`nutrition-carousel-${category}`);
    if (carousel) {
      const scrollAmount = 320; // item width + gap
      carousel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <h1>🥗 Nutrition Guide</h1>
        <p>Explore balanced nutrition and food categories for a healthy lifestyle</p>
      </div>

      <div className="nutrition-container">
        {Object.entries(nutritionCategories).map(([category, items]) => (
          <div key={category} className="nutrition-category-section">
            <h2 className="nutrition-category-title">{category}</h2>

            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-prev"
                onClick={() => handleScroll(category, "left")}
              >
                ❮
              </button>

              <div
                className="nutrition-carousel"
                id={`nutrition-carousel-${category}`}
              >
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nutrition-card"
                  >
                    <div className="nutrition-image">
                      <img src={item.image} alt={item.title} />
                      <div className="info-overlay">ℹ️ Learn More</div>
                    </div>
                    <h3>{item.title}</h3>
                  </a>
                ))}

                {/* Infinite loop - duplicate items at the end */}
                {items.map((item) => (
                  <a
                    key={`duplicate-${item.id}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nutrition-card"
                  >
                    <div className="nutrition-image">
                      <img src={item.image} alt={item.title} />
                      <div className="info-overlay">ℹ️ Learn More</div>
                    </div>
                    <h3>{item.title}</h3>
                  </a>
                ))}
              </div>

              <button
                className="carousel-btn carousel-next"
                onClick={() => handleScroll(category, "right")}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nutrition;
