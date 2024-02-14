
import LabListItems from "../labListItems/LabListItems";

const LabList = () => {

    return (
        <div className="catalog-list__labs">
            <h3 className="list-name">Список работ</h3>
            <LabListItems title="КАССАНДРА - комплекс радиомониторинга и анализа сигналов серии" />
            <LabListItems title="Локатор нелинейных переходов NR2000" />
            <LabListItems title="Лабораторная работа 3" />
        </div>
    );
}
 
export default LabList; 