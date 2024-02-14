

import catalogImage1 from '../../img/stich.gif'
import catalogImage2 from '../../img/stich2.jpg'

const Labs = () => {


    return (
        <div className="catalog-labs">
            <ul className="catalog-list list-reset grid">
                <li className="catalog-list__item">
                    <article className="sims-item">
                        <div className="sims__image">
                            <img src={catalogImage1} alt="" />
                        </div>
                    </article>
                </li>
                <li className="catalog-list__item">
                    <article className="sims-item">
                        <div className="sims__image">
                            <img src={catalogImage2} alt="" />
                        </div>
                    </article>
                </li>
            </ul>
        </div>

    );
}
 
export default Labs;