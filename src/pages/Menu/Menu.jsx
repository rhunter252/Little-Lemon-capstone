import { useState } from "react";
import { data } from "../../data/data";
import "./Menu.css";

const Menu = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="menu-container">
      <h1 className="menu-h1">Menu</h1>

      <div className="filter-container">
        <div>
          <button className="menu-button" onClick={() => setFoods(data)}>
            All
          </button>
          <button className="menu-button" onClick={() => filterType("burger")}>
            Burgers
          </button>
          <button className="menu-button" onClick={() => filterType("salad")}>
            Salads
          </button>
          <button className="menu-button" onClick={() => filterType("pasta")}>
            Pasta
          </button>
          <button className="menu-button" onClick={() => filterType("chicken")}>
            Chicken
          </button>
        </div>
      </div>
      <div className="card-container">
        {foods.map((food, index) => (
          <div key={index} className="menu-card">
            <img src={food.image} alt={food.name} className="card-image" />
            <div className="card-desc">
              <p className="card-name">{food.name}</p>
              <p>
                <span className="card-price">${food.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
