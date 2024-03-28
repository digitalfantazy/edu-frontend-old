import React from "react";
import { forwardRef } from "react";
import { useLocation } from "react-router-dom";

import List from "../list/List";
import Labs from "../labs/Labs";
import LabNav from "../labNav/LabNav";
// import { EXPANDLISTLABS } from "../../utils/constants";

const Catalog = forwardRef((props, ref) => {
  const location = useLocation();

  // const RenderComponent = Object.values(EXPANDLISTLABS).some((items) => {
  //   return items.some((item) => {
  //     return location.pathname.includes(item.link);
  //   });
  // });

  const RenderComponent =
    location.pathname.includes("programa") ||
    location.pathname.includes("about") ||
    location.pathname.includes("info");
  // console.log(location.pathname);
  // console.log(RenderComponent);

  return (
    <section id="catalog" className="catalog" ref={ref}>
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
});

export default Catalog;
