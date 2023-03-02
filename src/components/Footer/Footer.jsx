import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About</h3>
          <p style={{ marginBottom: "2rem" }}>
            In addition to our mouthwatering food, we also offer a selection of
            fine wines and other beverages to complement your meal. Our cozy and
            welcoming atmosphere is perfect for a casual dinner with friends or
            a romantic date night. We hope to see you soon at our restaurant!
          </p>
        </div>
        <div className="footer-column" style={{ marginBottom: "2rem" }}>
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
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="#"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <i className="BsTwitter">
                  <BsTwitter />
                </i>
                {"  "}
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <i className="BsFacebook">
                  <BsFacebook />
                </i>
                {"  "}
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
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
