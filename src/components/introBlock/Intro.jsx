import React from "react";
// import { useRef } from 'react'
// import { forwardRef } from 'react'
import BigButton from "../../UI/BigButton";


function Intro({ scrollToCatalog }) {



  return (
    <section className="intro">

      <span className="intro__bg-text" aria-hidden="true">
        Labs
      </span>

      <div className="container intro__content">

        <h1 className="intro__title">
          Виртуальные и практические лабораторные работы
        </h1>
        
        <p className="intro__descr">
          Предоставляем возможность выполнить лабораторные работы онлайн
        </p>

        <BigButton scrollToCatalog={scrollToCatalog} />

      </div>

    </section>
  );
};

export default Intro;
