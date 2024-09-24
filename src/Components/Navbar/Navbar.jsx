import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

import "./Navbar.css";
import logo from "../../assets/association-logo.png";
import logo_kohati from "../../assets/Logo-Kohati.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-container">
        {" "}
        {/* Wrap logos in a div */}
        <img src={logo} alt="" className="logo" />
        <img src={logo_kohati} alt="" className="logo-kohati" />{" "}
        {/* Adjust class name for specific styling */}
      </div>
      <ul>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="file-list"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Administrasi
          </Link>
        </li>
        <li>
          <Link spy={true} smooth={true} offset={-70} duration={500}>
            Struktur Organisasi
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
