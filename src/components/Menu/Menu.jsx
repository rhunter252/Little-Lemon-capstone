import "./Menu.css";
// import data
import { menuData } from "../../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../../variants";

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;

  return (
    <section className="home-menu_section">
      <div className="home-menu_bg"></div>
      {/* text */}
      <div className="home-menu_text-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="home-menu_text-container"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="home-menu_text-h2"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="home-menu_text-p"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="home-menu_gallery-wrapper"
      >
        <div className="home-menu_gallery-container">
          <div className="gallery_div">
            {/* grid */}
            <div className="home-menu_gallery-grid">
              {menuItems.map((item, index) => {
                // destructure item
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="gallery-item">
                      {/* image */}
                      {/* reverse order for the first image and the last one */}
                      <div
                        className="gallery-order"
                        style={{
                          order: index === 1 || index === 3 ? 1 : 0,
                        }}
                      >
                        <img src={image} alt="" />
                      </div>
                      {/* text */}
                      <div className="gallery-text">
                        <div style={{ textAlign: "center" }}>
                          <div className="gallery-name">{name}</div>
                          <div className="gallery-price">{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn menu-btn">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
