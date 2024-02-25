import SliderComponent from "../components/slider/SliderComponent";
import { IMAGES } from "../utils/constants";

const SimsPage = () => {

    const filterImagesById = (startId, endId) => {
        return IMAGES.filter(image => image.id >= startId && image.id <= endId);
      };

    const firstSlider = filterImagesById(1, 7);
    const secondSlider = filterImagesById(8, 14);


    return (
        <div className="main">       
            <div className="container">
                <div className="slider-item">       
                    <h1 className="title">Электоронные учебные пособия</h1>
                    <SliderComponent images={firstSlider} />              
                </div>

                <div className="slider-item">
                    <h1 className="title">Программные тренажеры</h1>
                    <SliderComponent  images={secondSlider} />  
                </div>
            </div>
        </div>
    );
}
 
export default SimsPage;