import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { IMAGES } from "../../utils/constants";

// Стилизованный компонент для Tooltip с кастомной шириной
const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 300, // Установите свою кастомную ширину
  },
});

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`arrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SliderComponent() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-item">
      <Slider {...settings}>

        {IMAGES.map(({ imgURL, imgAlt, name}, index) => (

          <div 
            className="card" 
            key={index}
          >
            {/* Оберните изображение в компонент Tooltip */}
            <CustomWidthTooltip title={name} placement="top">
              <img src={imgURL} alt={imgAlt} />
            </CustomWidthTooltip>
            <h3 className="slider-title">{name}</h3>
          </div>

        ))}

      </Slider>
    </div>
  );
}

export default SliderComponent;
