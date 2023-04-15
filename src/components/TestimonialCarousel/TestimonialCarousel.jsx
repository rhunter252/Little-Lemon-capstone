import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../components/TestimonialCarousel/TestimonialCarousel.css";
import "../../slider.css";

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="carousel"
    >
      {slider.map((item, index) => {
        // destructure item
        const { image, message, name, occupation } = item;
        return (
          <div className="carousel-slider" key={index}>
            <div className="carousel-slider-div">{message}</div>
            <div className="carousel-img">
              <img src={image} alt="" />
            </div>
            <div className="carousel-name">{name}</div>
            <div className="carousel-occupation">{occupation}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
