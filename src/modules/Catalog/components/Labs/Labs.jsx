import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PDF from "./pdf";
import { getPDF } from "../../index";
import { clearPdfUrl } from "../../store/catalogSlice";
import Loading from "../../../../components/loading/Loading";

import img from "../../../../img/ElectronicTextbooks/INMARSAT.png";

import "../../styles/labs.scss";

const Labs = () => {
  const { labId, param } = useParams();
  // console.log(labId)
  // console.log(param)
  const prevParam = useRef(labId);
  // console.log(prevParam)

  const dispatch = useDispatch();
  const { pdfUrl, loading } = useSelector((state) => state.catalog);

  useEffect(() => {
    const allowedLinks = [
      { labId: "NR2000", param: "about" },
      { labId: "kassandra", param: "about" },
      { labId: "NR900EK", param: "about" },
      // Добавьте другие разрешенные комбинации параметров здесь
    ];

    const isAllowedLink = allowedLinks.some((link) => link.labId === labId && link.param === param);

    if (isAllowedLink) {
      if (pdfUrl && param !== prevParam.current) {
        dispatch(clearPdfUrl()); // Экшн для очистки URL
      }
      if (!pdfUrl) {
        dispatch(getPDF({ labId, param }));
      }
    }

    prevParam.current = param; // Обновление ссылки на предыдущий param
  }, [dispatch, labId, param, pdfUrl]);

  // console.log(pdfUrl);
  // console.log(URL.createObjectURL(pdfData))

  let infoText = "";

  if (labId === "NR2000") {
    if (param === "programa") {
      // infoText = "Тут информация про ПО NR2000";
      return (
        // <div>
        //   <a href="/LABA" target="_blank" rel="noopener noreferrer">
        //     Открыть пример в новой вкладке
        //   </a>
        // </div>

        <div className="catalog-labs">
          <iframe
            className="catalog-frame"
            title="App"
            src="/nr2000/views/desktop-1.html" // Примерный путь к вашему HTML-файлу внутри iframe
            width="1300"
            height="1000"
          />
        </div>
      );
    } else if (param === "about") {
      return (
        <div className="catalog-labs">
          {pdfUrl ? (
            <PDF key={pdfUrl} src={pdfUrl} width="1100" height="900" type="application/pdf" />
          ) : loading ? (
            <Loading />
          ) : (
            ""
          )}
        </div>
      );
    } else if (param === "info") {
      infoText = "Технические характеристики";
    }

    ////////////
  } else if (labId === "inmarsat") {
    if (param === "programa") {
      return (
        <div className="catalog-labs">
          <img src={img} alt="" />
        </div>
      );
    } else if (param === "about") {
      return (
        <div className="catalog-labs">
          {pdfUrl ? (
            <PDF src={pdfUrl} width="1100" height="1000" type="application/pdf" />
          ) : loading ? (
            <Loading />
          ) : (
            <p>Произошла ошибка</p>
          )}
        </div>
      );
    } else if (param === "info") {
      infoText = "Технические характеристики";
    }
    ///////
  } else if (labId === "kassandra") {
    if (param === "programa") {
      return <div className="catalog-labs">Текст</div>;
    } else if (param === "about") {
      return (
        <div className="catalog-labs">
          {pdfUrl ? (
            <PDF src={pdfUrl} width="1100" height="1000" type="application/pdf" />
          ) : loading ? (
            <Loading />
          ) : (
            <p>Произошла ошибка</p>
          )}
        </div>
      );
    } else if (param === "info") {
      infoText = "Технические характеристики";
    }
  } else if (labId === "NR900EK") {
    if (param === "programa") {
      return <div className="catalog-labs">Текст</div>;
    } else if (param === "about") {
      return (
        <div className="catalog-labs">
          {pdfUrl ? (
            <PDF src={pdfUrl} width="1000" height="1000" type="application/pdf" />
          ) : loading ? (
            <Loading />
          ) : (
            <p>Произошла ошибка</p>
          )}
        </div>
      );
    } else if (param === "info") {
      infoText = "Технические характеристики";
    }
  }
  return (
    <div className="catalog-labs">
      <p className="sims-title">{infoText}</p>
    </div>
  );
};

export default Labs;
