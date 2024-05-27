import React from "react";

import Intro from "../components/introBlock/Intro";
import Catalog from "../modules/Catalog/index";
import PrivateRoute from "../utils/privateRoute";

function MainPage({ refProp, scrollToCatalog }) {
  return (
    <div className="MainPage">
      <Intro scrollToCatalog={scrollToCatalog} />
      <PrivateRoute element={<Catalog refProp={refProp} />} />
    </div>
  );
}

export default MainPage;
