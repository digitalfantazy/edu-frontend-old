import React from "react";
// import { useRef } from 'react'
// import { forwardRef } from 'react'
import BigButton from "../../UI/BigButton";

function Intro({ scrollToCatalog }) {



  return (
    <section className="intro">

      <span className="intro__bg-text" aria-hidden="true">
        Education
      </span>

      <div className="container intro__content">

        <h1 className="intro__title">
          Обучающая платформа с автоматизированными обучающими системами
        </h1>
        
        <p className="intro__descr">
          Все доступные автоматизированные обучающие системамы в одном месте
        </p>

        <BigButton scrollToCatalog={scrollToCatalog} />
      </div>

    </section>
  );
};

export default Intro;
