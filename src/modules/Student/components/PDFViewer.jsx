import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loading from "../../../components/loading/Loading";

import { clearPdfFile } from "../store/literatureSlice";
import { getPDFDocument } from "../api/getPDFDocument";

const PDFViewer = () => {
  const { filename } = useParams();
  const prevParam = useRef(filename);

  const dispatch = useDispatch();
  const { pdfFile, loading, error } = useSelector((state) => state.literature);

  useEffect(() => {
    if (filename !== prevParam.current) {
      dispatch(clearPdfFile());
      prevParam.current = filename;
    }
    dispatch(getPDFDocument({ filename }));
  }, [dispatch, filename]);
  console.log(pdfFile)
  
if (error) {
    <p>Произошла ошибка. Попробуйте обновить страницу</p>
}

  return (
    <div className="main">
      <div className="main-container">
        <div className="filter-wrapper">
          <div className="back-to-list">
            <ArrowBackIcon />
            <Link to="/student" className="back-to-list-link">
              Вернутся к списку
            </Link>
          </div>
        </div>
        <div className="cards-wrapper">
          {loading ? (
            <div className="loading_pdf">
              <Loading />
              <p className="loading-text">Пожалуйста, подождите, возможно файл слишком большой</p>
            </div>
          ) : (
            <object
              data={`${pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              width="1300"
              height="1000"
              aria-label="PDF Document"
            >
              <p>
                Ваш браузер не поддерживает встраивание PDF. Вы можете скачать документ{" "}
                <a href={pdfFile}>здесь</a>.
              </p>
            </object>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
