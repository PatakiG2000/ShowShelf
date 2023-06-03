import * as React from "react";
import SearchBox from "../Components/SearchBox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar: React.FunctionComponent /* <NavbarProps>  */ = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="title-logo-nav-container">
          <Link to="/">
            <img src="vite.svg" alt="" className="logo" />
          </Link>
          <Link to="/">
            <h1 className="sitename">ShowShelf</h1>
          </Link>
        </div>

        <SearchBox />
      </div>

      <div className="burger hidden" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>
      <div className={`mobile-nav ${isOpen ? "" : "hidden"}`}>
        <ul className="mobile-nav-list">
          <li className="nav-el">
            <i className="fa-solid fa-house"></i>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-play"></i>
            <Link
              to="/tracklist"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Tracklist
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-ranking-star"></i>
            <Link
              to="/toplist"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Toplist
            </Link>
          </li>
          <li className="nav-el">
            <i className="fa-solid fa-eye"></i>
            <Link
              to="/watchlist"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Watchlist
            </Link>
          </li>
        </ul>
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
