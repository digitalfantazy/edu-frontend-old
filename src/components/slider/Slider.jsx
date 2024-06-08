import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomTooltip from "../../UI/CustomToolTip";
import { sliderSettings } from "./sliderSettings";

function SliderComponent({ images }) {
  return (
    <>
      <Slider {...sliderSettings}>
        {images.map(({ imgURL, imgAlt, name, descption, link  }, index) => (
          <div className="card" key={index} style={{ width: "420px", height: "276px" }}>
            <Link className="slider_link" to={`/${link}`}>
              <CustomTooltip title={descption} placement="top">
                <img src={imgURL} alt={imgAlt} />
              </CustomTooltip>
              <h3 className="slider-title">{name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderComponent;
