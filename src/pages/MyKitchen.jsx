import React from "react";
import Title from "../components/Title";
import RecipieContainer from "../components/RecipieContainer";

const MyKitchen = () => {
  const recipies = JSON.parse(localStorage.getItem("kitchen-room")) || [];

  return (
    <>
      <Title>My Kitchen Room</Title>
      <RecipieContainer recipies={recipies}></RecipieContainer>
    </>
  );
};

export default MyKitchen;
