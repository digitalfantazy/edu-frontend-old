
import LabListItems from "../listItems/ListItems";

const List = () => {

    return (
        <div className="catalog-list__labs">
            <LabListItems title="Электоронные учебные пособия" />
            <LabListItems title="Обучающие программы" />
            <LabListItems title="Программные тренажеры" />
            <LabListItems title="Тренажеры" />


            {/* <LabListItems title="КАССАНДРА - комплекс радиомониторинга и анализа сигналов серии" />
            <LabListItems title="Локатор нелинейных переходов NR2000" />
            <LabListItems title="Лабораторная работа 3" /> */}
        </div>
    );
}
 
export default List; 