import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel";
import { testimonialData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section>
      {" "}
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white">{title}</h2>
          <p className="text-white/70 capitalize mb-8">{subtitle}</p>
          <div className="mb-12">
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
