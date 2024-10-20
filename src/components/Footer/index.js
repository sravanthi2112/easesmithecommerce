import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import  './index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section subscribe">
          <h3 className="subscribe-heading">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="subscribe-des">
            Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necessibus Enim
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="abcxyz@gmail.com" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section about-us">
          <h3 className="aboutus">ABOUT US</h3>
          <ul>
            <li key='1'>Our Story</li>
            <li key='2'>Blogs</li>
            <li key='3'>Careers</li>
            <li key='4'>Contact Us</li>
            <li key='5'>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3 className="aboutus">OUR SERVICES</h3>
          <ul>
            <li key='1'>Book Maali</li>
            <li key='2'>Plant Day Care</li>
            <li key='3'>Rent Plants</li>
            <li key='4'>Plants & Pots</li>
            <li key='5'>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section useful-links">
          <h3 className="aboutus">USEFUL LINKS</h3>
          <ul>
            <li key='1'>My Account</li>
            <li key='2'>Orders & Returns</li>
            <li key='3'>Track Order</li>
            <li key='4'>Terms & Conditions</li>
            <li key='5'>Privacy Policy</li>
            <li key='6'>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section get-in-touch">
          <h3 className="aboutus">GET IN TOUCH</h3>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-chaperone">
          <h3 className="subscribe-heading"> CHAPERONE</h3>
          <p className="chaperone-des">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
            quidem aut necessitatibus enim ut internos accusantium 
            a numquam autem ab rerum omnis Non molestiae ratione et
            laborum doloribus aut molestiae voluptates ut porro 
            excepturi sit molestiae obcaecati qui quis beatae est
            voluptatem elus. Et architecto nihil id labore omnis
            hic iste deleniti et porro aspernatur.
          </p>
        </div>
        <div className="social-links">
          <h4>Follow us on</h4>
          <ul>
            <li key='instagram'><RiInstagramFill /></li>
            <li key='fb'><FaFacebook /></li>
            <li key='threads'><BsThreadsFill /></li>
            <li key='utube'><FaYoutube /></li>
            <li key='in'><FaLinkedin /></li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
