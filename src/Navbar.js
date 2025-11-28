import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        {/* Brand should also use Link instead of <a> */}
        <Link className="navbar-brand fw-bold text-warning" to="/home">
          <img
            src="logo.png"
            alt="Podcast Logo"
            className="rounded shadow mb-3"
            style={{ width: "50px" }}
          />
          <i className="fa-solid me-2"></i> Lexusmentis
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
           <li className="nav-item">
  <NavLink
    to="/"
    className={({ isActive }) =>
      "nav-link" + (isActive ? " active fw-bold text-warning" : "")
    }
  >
    Home
  </NavLink>
</li>

<li className="nav-item">
  <NavLink
    to="/episodes"
    className={({ isActive }) =>
      "nav-link" + (isActive ? " active fw-bold text-warning" : "")
    }
  >
    Podcast
  </NavLink>
</li>

<li className="nav-item">
  <NavLink
    to="/poems"
    className={({ isActive }) =>
      "nav-link" + (isActive ? " active fw-bold text-warning" : "")
    }
  >
    Poems
  </NavLink>
</li>
 <li className="nav-item">
<NavLink
    to="/contact"
    className={({ isActive }) =>
      "nav-link" + (isActive ? " active fw-bold text-warning" : "")
    }
  >
    Contact
  </NavLink>
              </li>
{/* <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">Podcast</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/poems">Poems</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
