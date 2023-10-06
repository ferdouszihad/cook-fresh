import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Title from "../components/Title";
import { BsBookmarkHeart } from "react-icons/bs";
import { toast } from "react-toastify";

const RecipieDetail = () => {
  const { id } = useParams();
  const recipies = useLoaderData();
  const singleRecipie = recipies.find((item) => item.idMeal == id);
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
  } = singleRecipie;

  const handleAdd = () => {
    //prothome localstorage theke array ta k nibo -solved
    // jodi array na thake taile amra empt array nibo -solved
    //array er vetore singleRecipie k dhukabo -solved

    //array ta k abar string banaye localstOrage e rekhe dibo.

    const mySavedArray = JSON.parse(localStorage.getItem("kitchen-room")) || [];

    const findData = mySavedArray.find(
      (item) => item.idMeal == singleRecipie.idMeal
    );
    if (findData) {
      toast.error("Data allready Added");
    } else {
      mySavedArray.push(singleRecipie);

      // const convertToString = JSON.stringify(mySavedArray);
      // console.log(convertToString);

      localStorage.setItem("kitchen-room", JSON.stringify(mySavedArray));
      toast.success("Data added to My kitchen");
    }
  };

  if (singleRecipie) {
    return (
      <>
        <Title>{strMeal}</Title>
        <section className="content-box">
          <div className="relative">
            <img
              src={strMealThumb}
              className="w-full h-[450px] object-cover"
              alt=""
            />
            <div className="button absolute bottom-0 p-10 bg-opacity-60  bg-stone-700 w-full">
              <button
                onClick={handleAdd}
                style={{ backgroundColor: strTheme }}
                className="btn text-white"
              >
                Add to my Kitchen
              </button>
            </div>
          </div>

          <div
            style={{ backgroundColor: strTheme + "25" }}
            className="p-5 rounded-lg flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h2 style={{ color: strTheme }} className="card-title">
                Dish Name : {strMeal}
              </h2>
              <BsBookmarkHeart
                title="Add to kitchen"
                className="text-3xl cursor-pointer"
              ></BsBookmarkHeart>
            </div>

            <p className=" text-lg">
              Indulge in the delightful flavors of {strMeal}, a beloved{" "}
              {strArea} dish. This {strCategory} recipe will surely tantalize
              your taste buds and transport you to a world of culinary delight.
            </p>

            <div className="card-actions ">
              <div
                style={{ backgroundColor: strTheme }}
                className="badge text-white py-3  px-5 badge-outline"
              >
                {strCategory}
              </div>

              <div
                style={{ backgroundColor: strTheme }}
                className="badge text-white py-3 px-5 badge-outline"
              >
                {strArea} Dish
              </div>
            </div>
            <p>See Bellow to Read All The Instructions</p>
          </div>
        </section>
      </>
    );
  } else {
    return <h2>Not Found</h2>;
  }

  console.log(singleRecipie);

  //   console.log(recipies);
};

export default RecipieDetail;
