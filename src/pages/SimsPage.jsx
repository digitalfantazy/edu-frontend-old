import Slider from "../components/slider/Slider";

import { E_Textbooks, OP, PT } from "../modules/Catalog/index";

const SimsPage = () => {



    return (
        <div className="main">       
            <div className="container">
                <div className="slider-item">       
                    <h1 className="title">Электоронные учебные пособия</h1>
                    <Slider images={E_Textbooks} />              
                </div>

                <div className="slider-item">
                    <h1 className="title">Обучающие программы</h1>
                    <Slider  images={OP} />  
                </div>

                <div className="slider-item">
                    <h1 className="title">Программные тренажеры</h1>
                    <Slider  images={PT} />  
                </div>
            </div>
        </div>
    );
}
 
export default SimsPage;