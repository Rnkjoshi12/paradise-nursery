import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1524594154902-a31b3b94213c?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Money Plant", price: 20, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1553177592-7608bf7ff86a?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1556228453-ff816c0faca9?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1516557070066-1d48c66d0d40?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "ZZ Plant", price: 22, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1450817103755-3064a1537d6c?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Rubber Plant", price: 25, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1524592282948-9c0d6211e6d6?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://images.unsplash.com/photo-1524592476078-05b5876648c6?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Jade Plant", price: 14, category: "Succulents", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "Echeveria", price: 11, category: "Succulents", image: "https://images.unsplash.com/photo-1513639725746-c5d3cf3be5f2?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "Haworthia", price: 13, category: "Succulents", image: "https://images.unsplash.com/photo-1461080746300-8bbb0e46e8b7?auto=format&fit=crop&w=500&q=80" },
  { id: 11, name: "Burro's Tail", price: 16, category: "Succulents", image: "https://images.unsplash.com/photo-1516594798947-6a32b59ca37e?auto=format&fit=crop&w=500&q=80" },
  { id: 12, name: "Panda Plant", price: 15, category: "Succulents", image: "https://images.unsplash.com/photo-1490457847158-70aaefc6c5f7?auto=format&fit=crop&w=500&q=80" },
  { id: 13, name: "Rose", price: 30, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=500&q=80" },
  { id: 14, name: "Hibiscus", price: 28, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1563122876-8d3785e339e7?auto=format&fit=crop&w=500&q=80" },
  { id: 15, name: "Jasmine", price: 24, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1524593950685-5a3c0b2f06bc?auto=format&fit=crop&w=500&q=80" },
  { id: 16, name: "Marigold", price: 12, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1501004318641-0f27389d0dbb?auto=format&fit=crop&w=500&q=80" },
  { id: 17, name: "Lavender", price: 20, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1501004318641-2d00864731a9?auto=format&fit=crop&w=500&q=80" },
  { id: 18, name: "Orchid", price: 35, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1511166498693-6ea0b5b29dd0?auto=format&fit=crop&w=500&q=80" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const addedItemIds = useMemo(() => cartItems.map((item) => item.id), [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      <nav className="main-nav product-nav">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h1 className="page-title">Plant Collection</h1>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2 className="category-heading">{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    className="button-primary"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItemIds.includes(plant.id)}
                  >
                    {addedItemIds.includes(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
