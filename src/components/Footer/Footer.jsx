import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada dui et tellus aliquam, quis blandit nunc molestie. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada
            dui et tellus aliquam, quis blandit nunc molestie.
          </p>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#">
                <i className="BsTwitter">
                  <BsTwitter />
                </i>
                {"  "}
                Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="BsFacebook">
                  <BsFacebook />
                </i>
                {"  "}
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="BsInstagram">
                  <BsInstagram />
                </i>
                {"  "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
