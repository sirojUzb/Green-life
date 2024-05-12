import { Carousel, Button, Card } from "antd";
import { useState } from "react";

const SlideCarousel = (numberOfSlides) => {
  // Generate slides based on the number received as a prop
  const slides = Array.from(
    { length: numberOfSlides },
    (_, index) => index + 1
  );

  return (
    <Carousel autoplay>
      {slides.map((slide) => (
        <div key={slide}>
          <Card
            style={{ width: "100%", height: "300px", backgroundColor: "green" }}
          >
            Slide {slide}
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

const Dexample = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(5); // Initial number of slides

  return (
    <div>
      <SlideCarousel numberOfSlides={numberOfSlides} />
      <div style={{ marginTop: "20px" }}>
        <Button type="primary" onClick={() => setNumberOfSlides(5)}>
          5 Slides
        </Button>{" "}
        <Button type="default" onClick={() => setNumberOfSlides(10)}>
          10 Slides
        </Button>{" "}
        <Button type="success" onClick={() => setNumberOfSlides(20)}>
          20 Slides
        </Button>
      </div>
    </div>
  );
};

export default Dexample;
