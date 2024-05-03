import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPDF } from "../../store/reducers/pdfSlice";
// import catalogImage1 from '../../img/kasandra.png'

const Labs = () => {
  const { labId, param } = useParams();
  // console.log(labId)
  // console.log(param)

  const dispatch = useDispatch();
  const pdfUrl = useSelector((state) => state.pdf.pdfUrl);

  useEffect(() => {
    const allowedLinks = [
      { labId: "NR2000", param: "about" },
      { labId: "linanalyz", param: "about" },
      // Добавьте другие разрешенные комбинации параметров здесь
    ];

    const isAllowedLink = allowedLinks.some(
      (link) => link.labId === labId && link.param === param
    );

    if (isAllowedLink && !pdfUrl) {
      dispatch(getPDF({ labId, param }));
    }
  }, [dispatch, labId, param, pdfUrl]);

  // console.log(pdfUrl)
  // console.log(URL.createObjectURL(pdfData))

  let infoText = "";

  if (labId === "NR2000") {
    if (param === "programa") {
      // infoText = "Тут информация про ПО NR2000";
      return (
        <div className="catalog-labs">
          <iframe
            className="catalog-frame"
            title="App"
            src="/nr2000/views/intro.html" // Примерный путь к вашему HTML-файлу внутри iframe
            width="1000"
            height="800"
            frameBorder="0"
            // allowFullScreen
          />
        </div>
      );
    } else if (param === "about") {
      return (
        <div className="catalog-labs">
          {pdfUrl ? (
            <embed
              src={pdfUrl}
              width="1000"
              height="800"
              type="application/pdf"
            />
          ) : (
            <p className="sims-title">{infoText}</p>
          )}
        </div>
      );
    } else if (param === "info") {
      infoText = "Технические характеристики";
    }
  } else if (labId === "linanalyz" && param === "programa") {
    return (
      <div className="catalog-labs">
        {infoText = "Технические характеристики"}  
      </div>
    );
  }

  return (
    <div className="catalog-labs">
      <p className="sims-title">{infoText}</p>
    </div>
  );
};

export default Labs;
