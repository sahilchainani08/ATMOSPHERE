import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <div className="home-content">

        <div className="home-header">
          <h1>ATMOSPHERE</h1>
          <p>Music for wherever you are.</p>
        </div>

        <div className="environment-grid">

          <Link to="/cafe" className="environment-card cafe-card">
            <span className="environment-icon">☕</span>
            <span className="environment-name">CAFÉ</span>
          </Link>

          <Link to="/car" className="environment-card car-card">
            <span className="environment-icon">🚗</span>
            <span className="environment-name">CAR</span>
          </Link>

          <div className="environment-card coming-card">
            <span className="environment-icon">🏋️</span>
            <span className="environment-name">GYM</span>
            <span className="coming-label">COMING SOON</span>
          </div>

          <div className="environment-card coming-card">
            <span className="environment-icon">📺</span>
            <span className="environment-name">90's Hit</span>
            <span className="coming-label">COMING SOON</span>
          </div>

          <div className="environment-card coming-card">
            <span className="environment-icon">🌙</span>
            <span className="environment-name">CHILL</span>
            <span className="coming-label">COMING SOON</span>
          </div>

        </div>

        <div className="home-footer">
          <span>2 atmospheres available</span>
        </div>

      </div>
    </main>
  );
}

export default Home;