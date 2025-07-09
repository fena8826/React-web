

import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import footer from '../assets/images/footer.png';
import { Container } from 'react-bootstrap';
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <Container style={{ maxWidth: '1200px' }}>
        <div className="footer-container">
          
          {/* Left Column */}

          <div className="footer-col">
            <div className="footer-logo">
              <img src={footer} alt="footer logo" />
            </div>
            <div className="footer-p mt-3 ms-4">
              <p>20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK<br />
                69QJ+2F Alexandria, United Kingdom</p>
            </div>
            <div className="calls ms-4">
              <p>PHONE - <span>+91 123 456 789 0</span>  <span>+91 123 456 789 0,</span></p>
              <p>EMAIL - <span>info@gmail.com</span></p>
            </div>
          </div>

          {/* Center Column */}

          <div className="footer-col">
            <h2>OPENING HOURS</h2>
            <div className="footer-p1">
              <p>Mon - Tues : <span>6.00 am - 10.00 pm</span></p>
              <p>Wednes - Thurs : <span>6.00 am - 10.00 pm</span></p>
              <p>Launch : <span>Everyday</span></p>
              <p>Sunday : <span className="closed">Closed</span></p>
            </div>
          </div>

          {/* Right Column */}
          <div className="footer-col">
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Order Tracking</li>
              <li>Warranty and Services</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Pizzon all Rights Reserved. Designed by <span className="design">TemplatesCoder</span></p>
          <div className="social-icons mb-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* ✅ Scroll to Top Button */}
        <div className="scroll-top-btn" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <div>
            <RiArrowUpSLine size={24} />
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
