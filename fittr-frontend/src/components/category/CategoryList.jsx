import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import "./CategoryList.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error loading categories", err);
      });
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-title">📂 Categories</h2>

      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat.id} className="category-item">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
