
import catalogImage2 from '../../img/lab2.png'
import catalogImage1 from '../../img/kasandra.png'
import catalogImage3 from '../../img/lab3.png'

const Labs = () => {


    return (
        <div className="catalog-labs">
            <ul className="catalog-list list-reset grid">
                <li className="catalog-list__item">
                    <article className="sims-item">
                        <img className="sims__image" src={catalogImage1} alt="" />
                        <div className="information">
                            <span className='sims-title'>КАССАНДРА - комплекс радиомониторинга и анализа сигналов серии</span>
                        </div>
                    </article>
                </li>
                <li className="catalog-list__item">
                    <article className="sims-item">
                        <img className="sims__image" src={catalogImage2} alt="" />
                        <div className="information">
                            <span className='sims-title'>Название 2</span>
                        </div>
                    </article>
                </li>
                <li className="catalog-list__item">
                    <article className="sims-item">
                        <img className="sims__image" src={catalogImage3} alt="" />
                        <div className="information">
                            <span className='sims-title'>Название 3</span>
                        </div>
                    </article>
                </li>
            </ul>
        </div>

    );
}
 
export default Labs;