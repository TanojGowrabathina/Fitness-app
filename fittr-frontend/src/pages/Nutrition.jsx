// import { useState } from "react";
import React from "react";
import "../pages/Nutrition.css";

function Nutrition() {
  // Dummy data with nutrition images and links
  const nutritionCategories = {
    Proteins: [
      {
        id: 1,
        title: "Chicken Breast",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771394089/fittr/dhznaltljix3ldhattlx.webp",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771394089/fittr/dhznaltljix3ldhattlx.webp",
      },
      {
        id: 2,
        title: "Salmon",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399267/fittr/smcc6nf4apgwem2zxmaj.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399267/fittr/smcc6nf4apgwem2zxmaj.jpg",
      },
      {
        id: 3,
        title: "Eggs",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399336/fittr/kan6fmh6tynqgqi2t1fi.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399336/fittr/kan6fmh6tynqgqi2t1fi.jpg",
      },
      {
        id: 4,
        title: "Tofu",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399422/fittr/fyvmubxgxo4imfmqw4u0.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399422/fittr/fyvmubxgxo4imfmqw4u0.jpg",
      },
     {
        id: 5,
        title: "lamb",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399561/fittr/kqpi8vwzdyf49tamrsxt.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399561/fittr/kqpi8vwzdyf49tamrsxt.jpg",
      },
            {
        id: 6,
        title: "greek yogurt",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399618/fittr/unaxehozszzduszkhf7g.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399618/fittr/unaxehozszzduszkhf7g.jpg",
      },
            {
        id: 7,
        title: "chickpeas",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399660/fittr/u5y4pyusjl5kkb86st0k.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399660/fittr/u5y4pyusjl5kkb86st0k.jpg",
      },
            {
        id: 8,
        title: "soya beans",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399703/fittr/fahl8xkkoq8dcqxxvjyg.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399703/fittr/fahl8xkkoq8dcqxxvjyg.jpg",
      },
    ],
    Carbohydrates: [
      {
        id: 9,
        title: "Brown Rice",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399742/fittr/m593br3eg94at71k94xx.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399742/fittr/m593br3eg94at71k94xx.jpg",
      },
      {
        id: 10,
        title: "Sweet Potato",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399777/fittr/vnuhgwvhvdevmlhcheph.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399777/fittr/vnuhgwvhvdevmlhcheph.jpg",
      },
      {
        id: 11,
        title: "Whole Wheat Bread",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399813/fittr/ghj1rh7z74fysygdl1wq.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399813/fittr/ghj1rh7z74fysygdl1wq.jpg",
      },
      {
        id: 12,
        title: "Oats",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399874/fittr/ojsfefu3ab2xzjrl5czj.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399874/fittr/ojsfefu3ab2xzjrl5czj.jpg",
      },
            {
        id: 13,
        title: "barley",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399914/fittr/cc8fqphpxok2dvbvapfx.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771399914/fittr/cc8fqphpxok2dvbvapfx.jpg",
      },
            {
        id: 14,
        title: "Peas",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400034/fittr/ybuyy6m520rbfjgxyil2.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400034/fittr/ybuyy6m520rbfjgxyil2.jpg",
      },
            {
        id: 15,
        title: "corn",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400106/fittr/nkxakqahlou0wn7e6jrw.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400106/fittr/nkxakqahlou0wn7e6jrw.jpg",
      },
            {
        id: 16,
        title: "broccoli",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400155/fittr/t9dhxekcqxoolzijpbr4.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400155/fittr/t9dhxekcqxoolzijpbr4.jpg",
      },
    ],
    Fats: [
      {
        id: 17,
        title: "Avocado",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400194/fittr/b68d349jnhlvtl1utgss.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400194/fittr/b68d349jnhlvtl1utgss.jpg",
      },
      {
        id: 18,
        title: "Olive Oil",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400228/fittr/wmxurguh16phexk9sbrn.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400228/fittr/wmxurguh16phexk9sbrn.jpg",
      },
      {
        id: 19,
        title: "Almonds",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400262/fittr/tg68gb6wjic32whiztmz.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400262/fittr/tg68gb6wjic32whiztmz.jpg",
      },
      {
        id: 20,
        title: "Coconut Oil",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400296/fittr/wu0leaxwefglve66biyh.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400296/fittr/wu0leaxwefglve66biyh.jpg",
      },
            {
        id: 21,
        title: "walnuts",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400393/fittr/zckvl4rk0egnu0ut5ljr.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400393/fittr/zckvl4rk0egnu0ut5ljr.jpg",
      },
            {
        id: 22,
        title: "chia seeds",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400444/fittr/lb2t8t2xjxasmdrpi9r5.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400444/fittr/lb2t8t2xjxasmdrpi9r5.jpg",
      },
            {
        id: 23,
        title: "tuna",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400492/fittr/qvftnkxwt8ofpjxjyn82.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400492/fittr/qvftnkxwt8ofpjxjyn82.jpg",
      },
            {
        id: 24,
        title: "cheese",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400536/fittr/ba3m7i69jytuxdp7mh2o.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400536/fittr/ba3m7i69jytuxdp7mh2o.jpg",
      },
    ],
    Vegetables: [
      {
        id: 25,
        title: "spinach",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400567/fittr/bnbglrbcsmz1ngtcgrax.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400567/fittr/bnbglrbcsmz1ngtcgrax.jpg",
      },
      {
        id: 26,
        title: "kale",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400616/fittr/whl9cufev1b90tfb5pxc.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400616/fittr/whl9cufev1b90tfb5pxc.jpg",
      },
      {
        id: 27,
        title: "Carrots",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400649/fittr/cforkadvmh1u87dmw8gr.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400649/fittr/cforkadvmh1u87dmw8gr.jpg",
      },
      {
        id: 28,
        title: "Bell Peppers",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400695/fittr/bkwgbcfohuklba95fhwd.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400695/fittr/bkwgbcfohuklba95fhwd.jpg",
      },
            {
        id: 29,
        title: "cabbage",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400739/fittr/dw6g10queq2whyilizja.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400739/fittr/dw6g10queq2whyilizja.jpg",
      },
            {
        id: 30,
        title: "cauliflower",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400798/fittr/ypxissfrpwap5vy14z4g.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400798/fittr/ypxissfrpwap5vy14z4g.jpg",
      },
            {
        id: 31,
        title: "brussels sprouts",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400842/fittr/slyqmj4oehsjl4xca7tq.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400842/fittr/slyqmj4oehsjl4xca7tq.jpg",
      },
            {
        id: 32,
        title: "lettuce",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400932/fittr/drlfsouhcghe1f7dypcw.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400932/fittr/drlfsouhcghe1f7dypcw.jpg",
      },
    ],
    Fruits: [
      {
        id: 33,
        title: "Bananas",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400964/fittr/mevzrx16iu4j1pqjvmh0.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771400964/fittr/mevzrx16iu4j1pqjvmh0.jpg",
      },
      {
        id: 34,
        title: "Blueberries",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771401720/fittr/u4usbxa4fvlxr5jwuvgi.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771401720/fittr/u4usbxa4fvlxr5jwuvgi.jpg",
      },
      {
        id: 35,
        title: "Apples",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771401752/fittr/vpvcdoo3sqtwp0uwozmi.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771401752/fittr/vpvcdoo3sqtwp0uwozmi.jpg",
      },
      {
        id: 36,
        title: "Oranges",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402293/fittr/lpkfulnmdkidjslglub7.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402293/fittr/lpkfulnmdkidjslglub7.jpg",
      },
            {
        id: 37,
        title: "kiwi",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402102/fittr/avtbvavdj6bmeflzccpu.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402102/fittr/avtbvavdj6bmeflzccpu.jpg",
      },
            {
        id: 38,
        title: "papayas",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402136/fittr/czfzsyjpuevownk7sehc.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402136/fittr/czfzsyjpuevownk7sehc.jpg",
      },
            {
        id: 39,
        title: "pineapples",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402166/fittr/pru1vv26ubg2tkkbkx6d.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402166/fittr/pru1vv26ubg2tkkbkx6d.jpg",
      },
            {
        id: 40,
        title: "grapes",
        image: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402206/fittr/ebqdjzv0nilrkmb5jnuq.jpg",
        link: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771402206/fittr/ebqdjzv0nilrkmb5jnuq.jpg",
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
