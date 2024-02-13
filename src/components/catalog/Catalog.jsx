import React from 'react';
import { forwardRef } from 'react';

import LabList from '../labList/LabList';
import Labs from '../labs/Labs'

const Catalog = forwardRef(( props,ref ) => {


    return (
        <section id='catalog' className="catalog" ref={ref}>
            <div className="main__container">
                <h2 className="catalog-title">Работы</h2>
                <div className="grid">

                    <LabList  />
                    <Labs />

                </div>
            </div>
        </section>
    );
});


export default Catalog;