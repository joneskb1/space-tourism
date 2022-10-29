import "./Navbar.css";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize.js";
import { NavContext } from "../context/NavContext";

const pathNums = {
  "/": 0,
  "/destination": 1,
  "/crew": 2,
  "/technology": 3,
};

export default function Navbar() {
  const { windowSize } = useWindowSize();
  const [num, setNum] = useState(0);
  const location = useLocation();
  const context = useContext(NavContext);

  useEffect(() => {
    setNum(pathNums[location.pathname]);
  }, [location]);

  useEffect(() => {
    if (windowSize.innerWidth < 768 && context.isOpen === true) {
      context.closeMenu();
    }
  }, [windowSize]);

  function handleKeyPress(e) {
    if (e.keyCode !== 13) return;
    context.toggleMenu();
  }

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo image" className="logo" />
        <img
          src={hamburger}
          onClick={context.toggleMenu}
          alt="menu open icon"
          className={`hamburger`}
          tabIndex="1"
          onKeyDown={handleKeyPress}
        />
        <ul className="list-large-screen">
          <li>
            <Link to="/" className={num === 0 ? "active" : ""}>
              <span>00</span> HOME
            </Link>
          </li>
          <li>
            <Link to="/destination" className={num === 1 ? "active" : ""}>
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew" className={num === 2 ? "active" : ""}>
              <span>02</span> CREW
            </Link>
          </li>
          <li>
            <Link to="/technology" className={num === 3 ? "active" : ""}>
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`nav-popout ${context.isOpen ? "" : "hide"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={closeIcon}
          alt="menu close icon"
          className={`close-icon`}
          onClick={context.toggleMenu}
          onKeyDown={handleKeyPress}
          tabIndex="1"
        />
        <ul>
          <li>
            <Link to="/" onClick={context.closeMenu}>
              <span>00</span> HOME
            </Link>
          </li>
          <li>
            <Link to="/destination" onClick={context.closeMenu}>
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew" onClick={context.closeMenu}>
              <span>02</span> CREW
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={context.closeMenu}>
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
