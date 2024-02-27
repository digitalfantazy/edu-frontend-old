import React from 'react'
import { useParams } from 'react-router-dom'

import catalogImage1 from '../../img/kasandra.png'

const Labs = () => {
    const { labId, param } = useParams();
    console.log(labId)
    console.log(param)

    let infoText = "";

    if (labId === "NR2000") {
        if (param === "programa") {
            infoText = "Тут информация про ПО NR2000";
        } else if (param === "about") {
            infoText = "Тут информация про NR2000";
        }
    } else if (labId === "linanalyz" && param === "programa") {
        infoText = "Тут информация про анализатор";
    }

    

    return (
        <div className="">
            {/* <p>Привет</p> */}
            <p>{infoText}</p>
        </div>
    );
}
 
export default Labs;