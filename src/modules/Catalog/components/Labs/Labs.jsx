import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import GetPDFurl from "./pdf";
import FrameContent from "./FrameContent";
import { getPDF } from "../../index";
import { clearPdfUrl, openList } from "../../store/catalogSlice";
import Loading from "../../../../components/loading/Loading";

import img from "../../../../img/ElectronicTextbooks/INMARSAT.png";


import "../../styles/labs.scss";

const ALLOWED_LINKS = [
  { labId: "NR2000", param: "about", pdf: "nr2000" },
  { labId: "kassandra", param: "about", pdf: "kassandra_k6" },
  { labId: "NR900EK", param: "about", pdf: "NR900EK_ruk" },
  { labId: "prel", param: "about", pdf: "electronica_schematechnica" },
  // Добавьте другие разрешенные комбинации параметров здесь
];

const isAllowedLink = (labId, param) =>
  ALLOWED_LINKS.some((link) => link.labId === labId && link.param === param);

const renderContent = (labId, param, pdfUrl, loading) => {
  const link = ALLOWED_LINKS.find((link) => link.labId === labId && link.param === param);
  if (link) {
    const { pdf } = link;
    return <PDFContent pdfUrl={pdfUrl} loading={loading} />;
  }

  switch (labId) {
    case "NR2000":
      return param === "programa" ? (
        <FrameContent
          className="catalog-frame"
          title="App"
          src="/nr2000/views/desktop-1.html"
          width="1300"
          height="900"
        />
      ) : null;
    case "inmarsat":
      return param === "programa" ? <img src={img} alt="Inmarsat" /> : null;
    case "kassandra":
      return param === "programa" ? (
        <FrameContent
          className="catalog-frame"
          title="App"
          src="/kasandra/kassandra.html"
          width="1000"
          height="900"
        />
      ) : null;
    case "NR900EK":
      return param === "programa" ? <p>В разработке</p> : null;
    default:
      return <p></p>;
  }
};

const PDFContent = ({ pdfUrl, loading }) => {
  return pdfUrl ? (
    <GetPDFurl src={pdfUrl} width="1300" height="1000" type="application/pdf" />
  ) : loading ? (
    <Loading />
  ) : (
    <p>Произошла ошибка</p>
  );
};

const Labs = () => {
  const { labId, param } = useParams();
  const prevParam = useRef(param);

  const dispatch = useDispatch();
  const { pdfUrl, loading } = useSelector((state) => state.catalog);

  useEffect(() => {
    if (isAllowedLink(labId, param)) {
      if (pdfUrl && param !== prevParam.current) {
        dispatch(clearPdfUrl());
      }
      if (!pdfUrl) {
        const link = ALLOWED_LINKS.find((link) => link.labId === labId && link.param === param);
        if (link) {
          dispatch(getPDF({ param: link.pdf }));
        }
      }
    }

    if (labId) {
      const titles = {
        NR2000: "Электронные учебные пособия",
        kassandra: "Программные тренажеры",
        NR900EK: "Обучающие программы",
      };
      dispatch(openList({ title: titles[labId] }));
    }

    prevParam.current = param;
  }, [dispatch, labId, param, pdfUrl]);

  return <div className="catalog-labs">{renderContent(labId, param, pdfUrl, loading)}</div>;
};

export default Labs;
