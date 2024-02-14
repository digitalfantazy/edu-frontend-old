import React from 'react';

import LabList from '../labList/LabList';
import Labs from '../labs/Labs'

function Catalog() {


    return (
        <section id='catalog' className="catalog">
            <div className="main__container">
                <h2 className="catalog-title">Работы</h2>
                <div className="grid">

                    <LabList  />
                    <Labs />

                </div>
            </div>
        </section>
    );
};


export default Catalog;