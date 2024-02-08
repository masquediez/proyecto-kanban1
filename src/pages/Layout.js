import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Login-seite">Login-Seite</Link>
          </li>
          <li>
            <Link to="/Otro">Otro</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
