import "../Testimonial/Testimonial.css";
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel";
import { testimonialData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="testimonial-div"
        >
          <h2 className="testimonial-h2">{title}</h2>
          <p className="testimonial-p">{subtitle}</p>
          <div style={{ marginBottom: "3rem" }}>
            <img src={modelImg} alt="" />
          </div>
        </motion.div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
