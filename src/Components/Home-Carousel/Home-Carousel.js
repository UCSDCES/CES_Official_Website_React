
import React, { Card } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import p1 from "../../images/wechat_photos/drone_pic.png";
import p2 from "../../images/Grad Panel 2.jpg";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const homeCarousel = () => (
  <OwlCarousel className="owl-theme" responsive={responsive} loop={true} margin={0} center={true} dots={true} autoplay={true} autoplayHoverPause={true} items={3} nav>
    <div className="item">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p1} />
        <Card.Body>
          <Card.Title>无人机航拍｜2020年校园大改动，Sixer恐成最大赢家……</Card.Title>
          <Card.Text>
            2020年UCSD校园大改动，今年秋季，Sixth College位于Marshall和Muir中间的新宿舍楼投入使用...
          </Card.Text>
        </Card.Body>
      </Card></div>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title>Grad Panel: Bioengineering</Card.Title>
          <Card.Text>
            A series of grad panels targeting bioengineering majors. &ensp;
          </Card.Text>
        </Card.Body>
      </Card></div>
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title>Grad Panel: Bioengineering</Card.Title>
          <Card.Text>
            A series of grad panels targeting bioengineering majors. &ensp;
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title>Grad Panel: Bioengineering</Card.Title>
          <Card.Text>
            A series of grad panels targeting bioengineering majors. &ensp;
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </OwlCarousel>

)


export default homeCarousel;