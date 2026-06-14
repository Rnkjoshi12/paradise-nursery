import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
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
          <Route
            path="/"
            element={
              <div className="landing-page">
                <div className="landing-content">
                  <h1>Paradise Nursery</h1>
                  <p>Bringing Nature To Your Home</p>
                  <NavLink to="/plants">
                    <button className="get-started-btn">Get Started</button>
                  </NavLink>
                </div>
              </div>
            }
          />

          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
