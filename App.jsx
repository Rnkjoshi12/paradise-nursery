import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bringing Nature To Your Home
        </p>

        <Link to="/plants">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;