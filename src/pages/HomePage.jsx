import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Title from "../components/Title";
import { useLoaderData } from "react-router-dom";
import RecipieContainer from "../components/RecipieContainer";

const HomePage = () => {
  //   const recipies = useLoaderData();
  //   console.log(recipies);
  //   const [recipies, setRecipies] = useState([]);

  //   useEffect(() => {
  //     fetch("/data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);
  const [recipies, setRecipies] = useState(useLoaderData());

  return (
    <>
      <section id="banner">
        <Banner setRecipies={setRecipies}></Banner>
      </section>

      <section id="recipies">
        <Title>Our Recipies</Title>
        <RecipieContainer recipies={recipies}></RecipieContainer>
      </section>
    </>
  );
};

export default HomePage;
