import React from "react";

const PDF = ({ src, width, height, type }) => {

    // console.log({ key, src, width, height, type })
  return (
    <div className="catalog-labs">
      <embed src={src} width={width} height={height} type={type} />
    </div>
  );
};

export default PDF;
