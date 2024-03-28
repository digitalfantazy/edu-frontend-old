import React from 'react'
import { useParams } from 'react-router-dom'

// import catalogImage1 from '../../img/kasandra.png'

const Labs = () => {
    const { labId, param } = useParams();
    // console.log(labId)
    // console.log(param)

    let infoText = "";

    if (labId === "NR2000") {
        if (param === "programa") {
            // infoText = "Тут информация про ПО NR2000";
            return (
                <div className="catalog-labs">
                    <iframe
                        title='App'
                        src="/nr2000/views/intro.html" // Примерный путь к вашему HTML-файлу внутри iframe
                        width="1000"
                        height="800"
                        frameBorder="0"
                        // allowFullScreen
                    />
                </div>
            );
        } else if (param === "about") {
            infoText = "Тут информация про NR2000";
        } else if (param === "info") {
            infoText = "Технические характеристики";
        }
    } else if (labId === "linanalyz" && param === "programa") {
        infoText = "Тут информация про анализатор";
    }

    

    return (
        <div className="catalog-labs">
            <p className='sims-title'>{infoText}</p>
        </div>
    );
}
 
export default Labs; 