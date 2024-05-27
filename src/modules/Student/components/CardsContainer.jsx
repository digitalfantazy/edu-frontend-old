import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../style/student.scss";

import { getCards } from "../api/getCards";
import { useCombinedCards } from "../helpers/cards";
import FilterCards from "./FilterCards";
import Loading from "../../../components/loading/Loading";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.literature);
  const combinedCards = useCombinedCards();
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);


  const filteredCards =
    selectedCategories.length === 0
      ? combinedCards
      : combinedCards.filter((card) => selectedCategories.includes(card.category));
  console.log(combinedCards);

  return (
    <div className="main-container">
      <div className="filter-wrapper">
        <FilterCards
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
      <div className="cards-wrapper">
        <h3 className="title">Доступная литература</h3>
        {loading ? (
          <Loading />
        ) : error ? (
          <>{error}</>
        ) : (
          <div className="grid-cards">
            {filteredCards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  {card.preview ? (
                    <img src={card.preview} alt={card.title} className="card-image" />
                  ) : (
                    <div className="card-placeholder">
                      <p className="card-authors">{card.authors}</p>
                      <h4 className="card-title">{card.title}</h4>
                    </div>
                  )}
                  <div className="card_footer">
                    <div className="card-description">{card.description}</div>
                    <div className="card-description">{card.authors}</div>
                    <Link to={`/student/${card.pdf_file.name}`} className="card-link">
                      Просмотр
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
