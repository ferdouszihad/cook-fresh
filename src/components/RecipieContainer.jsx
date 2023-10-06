import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipieSingle from "./RecipieSingle";

const RecipieContainer = ({ recipies }) => {
  const [limit, setLimit] = useState(6);

  const handleCardDisplay = () => {
    setLimit(recipies.length);
  };

  return (
    <>
      <div className="content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recipies.slice(0, limit).map((recipie) => (
          <RecipieSingle key={recipie.idMeal} recipie={recipie}></RecipieSingle>
        ))}
      </div>
      {limit < recipies.length && (
        <div className="show-btn text-center py-10">
          <button onClick={handleCardDisplay} className="btn btn-primary">
            Show Me More
          </button>
        </div>
      )}
    </>
  );
};

export default RecipieContainer;
