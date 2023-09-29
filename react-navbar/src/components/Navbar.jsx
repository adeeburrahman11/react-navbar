import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleHoverGallery = () => setIsGalleryDropdownOpen(true);
  const handleLeaveGallery = () => setIsGalleryDropdownOpen(false);

  const handleHoverAbout = () => setIsAboutDropdownOpen(true);
  const handleLeaveAbout = () => setIsAboutDropdownOpen(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="lj-logo" src="/src/assets/img/logo.jpg" />
      </Link>
      <div className={"menu"} onClick={handleClick}>
        <i
          className={
            click ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        />
      </div>
      <ul className={click ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverAbout}
            onMouseLeave={handleLeaveAbout}
            className="nav-link"
          >
            About Us
            <i className="fa-solid fa-angle-down" />
            {isAboutDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/about/about1">about1</Link>
                <Link to="/about/about2">about2</Link>
                <Link to="/about/about3">about3</Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <div
            onMouseEnter={handleHoverGallery}
            onMouseLeave={handleLeaveGallery}
            className="nav-link"
          >
            Gallery
            <i className="fa-solid fa-angle-down" />
            {isGalleryDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/gallery/gallery1">Gallery1</Link>
                <Link to="/gallery/gallery2">Gallery2</Link>
                <Link to="/gallery/gallery3">Gallery3</Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
