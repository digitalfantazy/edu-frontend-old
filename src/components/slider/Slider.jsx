import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomTooltip from "../../UI/CustomToolTip";
import { sliderSettings } from "../../utils/sliderSettings";



function SliderComponent({images}) {

  return (
    <div className="slider-item">
      <Slider {...sliderSettings}>

        {images.map(({ imgURL, imgAlt, name, descption}, index) => (

          <div 
            className="card" 
            key={index}
          >

            <CustomTooltip title={descption} placement="top">
              <img src={imgURL} alt={imgAlt} />
            </CustomTooltip>
            <h3 className="slider-title">{name}</h3>
          </div>

        ))}

      </Slider>
    </div>
  );
}

export default SliderComponent;
