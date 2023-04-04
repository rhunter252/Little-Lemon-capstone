import "./Team.css";
import { teamData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Team = () => {
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;

  return (
    <section className="team-section">
      <div className="team-container">
        {/* text & image wrapper */}
        <div className="team-wrapper">
          {/* text */}
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="team-text"
          >
            <div
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "0rem",
              }}
            >
              {pretitle}
            </div>
            <h2
              style={{
                color: "black",
                fontSize: "46px",
                marginBottom: "1rem",
                fontStyle: "italic",
              }}
            >
              {title}
            </h2>
            <p style={{ marginBottom: "10px" }}>{sub1}</p>
            <p style={{ marginBottom: "10px" }}>{sub2}</p>
            <div style={{ margin: "0 26px" }}>
              <div className="team-name">{name}</div>
              <div className="team-occupation">{occupation}</div>
            </div>
            <div className="team-signature">
              <img src={signatureImg} alt="" />
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            style={{ flex: "1" }}
          >
            <img src={chefImg} alt="" className="team-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
