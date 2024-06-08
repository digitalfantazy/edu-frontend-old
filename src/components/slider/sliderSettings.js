import SliderArrows from "../../UI/SliderArrows";


export const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SliderArrows />,
    prevArrow: <SliderArrows />,
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
