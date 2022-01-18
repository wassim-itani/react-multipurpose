import Brand from "./Brand";
import Button from "./Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => setisOpen(!isOpen);
  const closeMenu = (e) => {
    if (e.target.className === "brand" || e.target.className === "nav__link" || e.target.className.includes('btn')) {
      setisOpen(false);
    }
  };
  
  return (
    <nav className="nav">
      <div className="container nav__container">
        <Brand onClick={closeMenu} />
        <div id="menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav__menu ${isOpen ? "nav__menu--open" : ""} `} onClick={closeMenu}>
          <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav__link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#blogs" className="nav__link">
              Blogs
            </a>
          </li>
          <li>
            <Button type="primary" text="Contact Us" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
