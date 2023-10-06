import React from "react";
import Title from "../components/Title";
import { useLoaderData } from "react-router-dom";
import RecipieContainer from "../components/RecipieContainer";

const RecipiePage = () => {
  const recipies = useLoaderData();
  return (
    <section id="recipies">
      <Title>All Recipes</Title>
      <RecipieContainer recipies={recipies}></RecipieContainer>
    </section>
  );
};

export default RecipiePage;
