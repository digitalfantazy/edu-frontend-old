import React from "react";
// import { forwardRef } from "react";
import { useLocation } from "react-router-dom";

import List from "./List/List";
import Labs from "./Labs/Labs";
import LabNav from "./Labs/LabNav";
import "../styles/catalog.scss"
// import { EXPANDLISTLABS } from "../../utils/constants";

const Catalog = ({ refProp }) => {
  const location = useLocation();


  const RenderComponent =
    location.pathname.includes("programa") ||
    location.pathname.includes("about");
    // location.pathname.includes("info");
  // console.log(location.pathname);
  // console.log(RenderComponent);

  return (
    <section id="catalog" className="catalog" ref={refProp}>
      <div className="container">
        <div className="catalog-title-container">
          <h2 className="catalog-title">Обучающие системы</h2>
          {RenderComponent && <LabNav />}
        </div>

        <div className="grid">
          <List />
          <Labs /> 
        </div>
      </div>
    </section>
  );
};

export default Catalog;
