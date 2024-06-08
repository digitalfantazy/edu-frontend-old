import React from "react";

const IFrameContent = ({ src, width, height, title }) => {
  return (
    <iframe
      className="catalog-frame"
      title={title}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default IFrameContent;