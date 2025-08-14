// import router
import AppRoutes from "./routes";

// import Link from react-router-dom
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* Navbar (Fixed) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand fw-bold">
            HOME
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  href="https://santrikoding.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  SANTRIKODING.COM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Centered */}
      <main
        className="container d-flex align-items-center justify-content-center mt-5"
        style={{ minHeight: "100vh", paddingTop: "80px" }} // 80px untuk menghindari navbar
      >
        <AppRoutes />
      </main>
    </div>
  );
}
