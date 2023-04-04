import "./About.css";
import { aboutData } from "../../data";
import { motion } from "framer-motion";
import { plateVariants, staggerContainer, fadeIn } from "../../variants";

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className="about-section">
      <div className="about-container">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="about-wrapper"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="about-text"
          >
            <div className="about-pretitle">{pretitle}</div>
            <h2 className="about-title">{title}</h2>
            <p className="about-subtitle">{subtitle}</p>
            <button className="btn">{btnText}</button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
