import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function LandingPage({ onStart }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Bringing Nature To Your Home</p>
        <button className="get-started-btn" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowProductList(true);
    navigate("/plants");
  };

  return (
    <div className="app-shell">
      <header className="main-header">
        <div className="brand">Paradise Nursery</div>
        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
          <NavLink to="/plants" className={({ isActive }) => (isActive ? "active-link" : "")}>Plants</NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active-link" : "")}>Cart</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={showProductList ? <ProductList /> : <LandingPage onStart={handleGetStarted} />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
