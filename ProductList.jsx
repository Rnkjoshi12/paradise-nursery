import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Indoor Plants
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Money Plant", price: 20, category: "Indoor Plants", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor Plants", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor Plants", image: "https://via.placeholder.com/150" },
  { id: 5, name: "ZZ Plant", price: 22, category: "Indoor Plants", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Rubber Plant", price: 25, category: "Indoor Plants", image: "https://via.placeholder.com/150" },

  // Succulents
  { id: 7, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Jade Plant", price: 14, category: "Succulents", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Echeveria", price: 11, category: "Succulents", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Haworthia", price: 13, category: "Succulents", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Burro's Tail", price: 16, category: "Succulents", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Panda Plant", price: 15, category: "Succulents", image: "https://via.placeholder.com/150" },

  // Flowering Plants
  { id: 13, name: "Rose", price: 30, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Hibiscus", price: 28, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Jasmine", price: 24, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Marigold", price: 12, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
  { id: 17, name: "Lavender", price: 20, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
  { id: 18, name: "Orchid", price: 35, category: "Flowering Plants", image: "https://via.placeholder.com/150" },
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
          backgroundColor: "#4CAF50",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/plants" style={{ color: "white" }}>
          Plants
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartCount})
        </Link>
      </nav>

      <h1 style={{ textAlign: "center" }}>Paradise Nursery</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                    height="150"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;