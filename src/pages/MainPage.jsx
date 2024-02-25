import React from "react";
import { useRef } from "react";



import Intro from "../components/introBlock/Intro";
import Catalog from "../components/catalog/Catalog";

function MainPage() {

  const ref = useRef(null)
  const scrollToCatalog = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

    return (
      <div className="MainPage">

        <Intro scrollToCatalog={scrollToCatalog}/>
        <Catalog ref={ref} />

        

      </div>
    );
  }

export default MainPage