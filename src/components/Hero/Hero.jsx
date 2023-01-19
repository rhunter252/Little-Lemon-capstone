import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Reservations from "../../pages/Reservations";

function Home() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/reservations";
    navigate(path);
  };

  return (
    <>
      <section className="hero-box">
        <div className="hero-div">
          <h1 className="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn" onClick={routeChange}>
            Reserve a Table
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
