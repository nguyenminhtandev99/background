import React from "react";
import "./App.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const backgroundData = [
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/359bd8a6-3748-49af-9238-7be6697f814b/img1.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/c2fc3784-3a36-4d7b-82d3-ced988900d92/img2.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/8913f52d-837e-451f-bc8a-8d54f869c2bc/img3.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/d7bf930c-5541-43db-9742-c77565accff1/img4.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/757a3801-f7a9-446b-9f04-799758c6f3a0/img5.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/0d707acf-28d2-4954-82f9-dcaebb32cc0c/img6.jpg",
    "https://admin-order.s3.ap-northeast-1.wasabisys.com/2022/07/10/7cd2d05b-84c3-49a2-966d-bde83fd9b2a2/img7.jpg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className="App">
      <div
        className="background-box"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Slider {...settings}>
        {backgroundData.map((item) => (
          <div
            className="background"
            style={{ width: "100vw", height: "100%" }}
          >
            <img
              src={item}
              alt="background"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
        </Slider>
      </div>
      {/* <div
        className="btn"
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          background: "#d4e9e2",
          padding: "15px",
          cursor: "pointer",
        }}
      >
        <LeftOutlined />
      </div>
      <div
        className="btn"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          background: "#d4e9e2",
          padding: "15px",
          cursor: "pointer",
        }}
      >
        <RightOutlined />
      </div> */}
    </div>
  );
}

export default App;
