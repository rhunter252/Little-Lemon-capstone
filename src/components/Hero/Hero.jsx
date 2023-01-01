import "./Hero.css";

function Home() {
  return (
    <>
      <section className="hero-box">
        <div className="hero-div">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn">Reserve a Table</button>
        </div>
      </section>
    </>
  );
}

export default Home;
