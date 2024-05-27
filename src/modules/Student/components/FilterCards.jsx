import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import "../style/filter.scss";

const FilterCards = ({ selectedCategories, setSelectedCategories }) => {
  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="filter-container">
      <h3>Выберите нужный раздел</h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("manual")}
              onChange={() => handleCheckboxChange("manual")}
              sx={{
                color: "var(--button-color)",
                "&.Mui-checked": {
                  color: "var(--button-color)",
                },
              }}
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-family)",
                fontSize: "20px",
                color: selectedCategories.includes("manual") ? "var(--button-color)" : "inherit",
              }}
            >
              Учебники и учебные пособия
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("laba")}
              onChange={() => handleCheckboxChange("laba")}
              sx={{
                color: "var(--button-color)",
                "&.Mui-checked": {
                  color: "var(--button-color)",
                },
              }}
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-family)",
                fontSize: "20px",
                color: selectedCategories.includes("laba") ? "var(--button-color)" : "inherit",
              }}
            >
              Методические рекомендации к лабораторным работам и практическим занятиям
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("pribor")}
              onChange={() => handleCheckboxChange("pribor")}
              sx={{
                color: "var(--button-color)",
                "&.Mui-checked": {
                  color: "var(--button-color)",
                },
              }}
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-family)",
                fontSize: "20px",
                color: selectedCategories.includes("pribor") ? "var(--button-color)" : "inherit",
              }}
            >
              Технические средства
            </Typography>
          }
        />
      </FormGroup>
    </div>
  );
};

export default FilterCards;
