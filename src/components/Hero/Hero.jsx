import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { heroData } from "./../../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./../../variants";
import About from "../About/About";
import HomeMenu from "../Menu/Menu";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/reservations";
    navigate(path);
  };

  const { pretitle, title, subtitle, btnText } = heroData;

  return (
    <>
      <section className="hero-box">
        <div className="hero-container">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="hero-text"
          >
            {/* pretitle */}
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1.1)}
              className="hero-pretitle"
            >
              {pretitle}
            </motion.div>
            {/* title */}
            <motion.h1
              variants={fadeIn("down", "tween", 0.3, 1.1)}
              className="hero-title"
            >
              {title}
            </motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.1)}
              className="hero-subtitle"
            >
              {subtitle}
            </motion.p>
            {/* button */}
            <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
              <button className="btn">{btnText}</button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <About />
      <HomeMenu />
      <Team />
      <Testimonial />
    </>
  );
}

export default Home;
