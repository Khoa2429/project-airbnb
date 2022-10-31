import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { layDanhSachCongViecTheoTenCongViecAction } from "../../../redux/actions/QuanLyCongViecAction";
import styleSlick from "./MultipleSlick.module.scss";
import { history } from "../../../App";
import { POPULAR_SERVICES } from "../../../redux/types";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function MultipleSlick(props) {
  const dispatch = useDispatch();

  const arrMultipleSlick = [
    {
      title: "Build your brand",
      service: "Logo Design",
      img: "./img/MultipleSlick/logo-design-2x.png",
    },
    {
      title: "Customize your site",
      service: "WordPress",
      img: "./img/MultipleSlick/wordpress-2x.png",
    },
    {
      title: "Share your message",
      service: "Voice Over",
      img: "./img/MultipleSlick/voiceover-2x.png",
    },
    {
      title: "Engage your audience",
      service: "Video Explainer",
      img: "./img/MultipleSlick/animated-explainer-2x.png",
    },
    {
      title: "Reach more customers",
      service: "Social Media",
      img: "./img/MultipleSlick/social-2x.png",
    },
    {
      title: "Unclock growth online",
      service: "SEO",
      img: "./img/MultipleSlick/seo-2x.png",
    },
    {
      title: "Color your dreams",
      service: "Illustration",
      img: "./img/MultipleSlick/illustration-2x.png",
    },
    {
      title: "Go gobal",
      service: "Translation",
      img: "./img/MultipleSlick/translation-2x.png",
    },
    {
      title: "Learn your business",
      service: "Data Entry",
      img: "./img/MultipleSlick/data-entry-2x.png",
    },
    {
      title: "Showcase your story",
      service: "Book Covers",
      img: "./img/MultipleSlick/book-covers-2x.png",
    },
  ];

  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  var numberSlidesToShow = 5;
  if (window.innerWidth < 1100) {
    numberSlidesToShow = 4;
  }
  if (window.innerWidth < 950) {
    numberSlidesToShow = 3;
  }
  if (window.innerWidth < 700) {
    numberSlidesToShow = 2;
  }
  if (window.innerWidth < 500) {
    numberSlidesToShow = 1;
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    centerPadding: "60px",
    infinite: true,
    speed: 1000,
    slidesToShow: numberSlidesToShow,
    slidesToScroll: numberSlidesToShow,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section
      id="multipleSlick"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
      className="my-container"
    >
      <h1
        style={{
          marginBottom: "40px",
          fontSize: "32px",
          color: "#404145",
          textAlign: "center",
        }}
        className="container"
      >
        Popular professional services
      </h1>
      <Slider {...settings}>
        {arrMultipleSlick.map((item, index) => {
          return (
            <div
              type="button"
              className="d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => {
                history.push("/joblistsearch");
                dispatch({
                  type: POPULAR_SERVICES,
                  congViecPhoBien: item.service,
                });
                dispatch(
                  layDanhSachCongViecTheoTenCongViecAction(item.service)
                );
              }}
            >
              <div
                className={`${styleSlick["width-item"]}`}
                title={item.service}
              >
                <div
                  className="card position-relative"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "345px",
                  }}
                >
                  <div className="card-body position-absolute top-0 right-0">
                    <p
                      className="text-white"
                      style={{ fontWeight: "inherit", marginBottom: "0" }}
                    >
                      {item.title}
                    </p>
                    <h1 className="text-white" style={{ fontSize: "25px" }}>
                      {item.service}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default MultipleSlick;
