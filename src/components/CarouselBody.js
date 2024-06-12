import React from "react";

const CarouselBody = (props) => {
  console.log("hellooo");
  const { carouselImages } = props;

  console.log("Data received", carouselImages);
  return (
    <div className="caro-card">
      <img />
    </div>
  );
};

export default CarouselBody;
