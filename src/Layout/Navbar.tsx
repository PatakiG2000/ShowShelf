import * as React from "react";
import SearchBox from "../Components/SearchBox";
import { Link } from "react-router-dom";

/* interface NavbarProps {
  message: string;
} */

const Navbar: React.FunctionComponent /* <NavbarProps>  */ = (props) => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src="vite.svg" alt="" className="logo" />
        </Link>
        <SearchBox />
      </div>

      <div className="burger hidden">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-el">
            <i className="fa-solid fa-house"></i>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-play"></i>
            <Link to="/tracklist" className="nav-link">
              Tracklist
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-ranking-star"></i>
            <Link to="/toplist" className="nav-link">
              Toplist
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-eye"></i>
            <Link to="/watchlist" className="nav-link">
              Watchlist
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
