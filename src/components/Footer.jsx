import { FaEnvelope, FaPhone, FaLocationArrow, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div>
            <div className="footer__list-title">Quick Links</div>
            <ul>
              <li className="footer__item">
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li className="footer__item">
                <a href="#testimonials" className="footer__link">
                  Testimonials
                </a>
              </li>
              <li className="footer__item">
                <a href="#blogs" className="footer__link">
                  Blogs
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms & Conditions
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__list-title">Industries</div>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Website Development
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Mobile Development
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Web Design
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Graphic Design
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__list-title">Get In Touch</div>
            <ul>
              <li className=" footer__item footer__contact">
                <FaEnvelope />
                <a href="#" className="footer__link">
                  john-doe@gmail.com
                </a>
              </li>
              <li className=" footer__item footer__contact">
                <FaPhone />
                <a href="#" className="footer__link">
                  +xxx 109012301
                </a>
              </li>
              <li className="footer__item footer__contact">
                <FaLocationArrow />
                <a href="#" className="footer__link">
                  32 StreetOne Boards, GJ 560123
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p>CopyRight &copy; 2021 All Rights Reserved</p>
          <p id="message">
            Built with <FaHeart id="heart" /> by{" "}
            <span id="name">Wassim Itani</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
