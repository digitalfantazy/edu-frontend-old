import SliderComponent from "../components/Slider/SliderComponent";

const SimsPage = () => {
    return (
        <div className="slider">       
            <div className="container">
                <div className="slider-container">
                    <h1 className="title">Электоронные учебные пособия</h1>
                    <SliderComponent/>
                </div>
                <div className="slider-item">
                    <h1 className="title">Обучающие программы</h1>
                    <SliderComponent/>
                </div>
            </div>
        </div>
    );
}
 
export default SimsPage;