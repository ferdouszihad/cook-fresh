import React from "react";
import { Link } from "react-router-dom";

const RecipieSingle = ({ recipie }) => {
  //   console.log(Object.keys(recipie).join(","));
  const {
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strTheme,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = recipie;

  return (
    <Link
      to={`/recipies/${idMeal}`}
      style={{ backgroundColor: strTheme + "20" }}
      className="card shadow-xl"
    >
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 style={{ color: strTheme }} className="card-title">
          {strMeal}
        </h2>
        <div
          style={{ backgroundColor: strTheme + "80" }}
          className="badge badge-secondary"
        >
          {strArea} Food
        </div>
        <p className="text-justify">{strInstructions.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <div
            style={{ backgroundColor: strTheme }}
            className="badge badge-outline text-white py-3 px-5"
          >
            {strCategory}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipieSingle;
