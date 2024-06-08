import React from "react";

import ListItems from "./ListItems";

const List = (ref) => {
  return (
    <div className="catalog-list__labs">
      <ListItems  title="Электронные учебные пособия" />
      <ListItems title="Обучающие программы" />
      <ListItems title="Программные тренажеры" />
      {/* <ListItems title="Тренажеры" /> */}
    </div>
  );
};

export default List;
