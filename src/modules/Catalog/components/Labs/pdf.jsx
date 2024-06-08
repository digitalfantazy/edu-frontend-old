import React from "react";

const GetPDFurl = ({ src, width, height, type }) => {
  return (
    <div className="catalog-labs">
      <object
        data={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
        type="application/pdf"
        width={width}
        height={height}
        aria-label="PDF Document"
      >
        <p>Ваш браузер не поддерживает встраивание PDF. Вы можете скачать документ <a href={src}>здесь</a>.</p>
      </object>
    </div>
  );
};

export default GetPDFurl;
