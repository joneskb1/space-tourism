import "./Navbar.css";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize.js";

const pathNums = {
  "/": 0,
  "/destination": 1,
  "/crew": 2,
  "/technology": 3,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { windowSize } = useWindowSize();
  const [num, setNum] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setNum(pathNums[location.pathname]);
  }, [location]);

  function toggleMenu() {
    setMenuOpen((cur) => !cur);
  }

  useEffect(() => {
    if (windowSize.innerWidth < 768 && menuOpen === true) {
      setMenuOpen((cur) => !cur);
    }
  }, [windowSize]);

  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='logo image' className='logo' />
        <img
          src={hamburger}
          onClick={toggleMenu}
          alt='menu open icon'
          className={`hamburger`}
        />
        <hr></hr>
        <ul className='list-large-screen'>
          <li>
            <Link to='/' className={num === 0 ? "active" : ""}>
              <span>00</span> HOME
            </Link>
          </li>
          <li>
            <Link to='/destination' className={num === 1 ? "active" : ""}>
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link to='/crew' className={num === 2 ? "active" : ""}>
              <span>02</span> CREW
            </Link>
          </li>
          <li>
            <Link to='/technology' className={num === 3 ? "active" : ""}>
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={`nav-popout ${menuOpen ? "" : "hide"}`}>
        <img
          src={closeIcon}
          alt='menu close icon'
          className={`close-icon`}
          onClick={toggleMenu}
        />
        <ul>
          <li>
            <Link to='/'>
              <span>00</span> HOME
            </Link>
          </li>
          <li>
            <Link to='/destination'>
              <span>01</span> DESTINATION
            </Link>
          </li>
          <li>
            <Link to='/crew'>
              <span>02</span> CREW
            </Link>
          </li>
          <li>
            <Link to='/technology'>
              <span>03</span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
