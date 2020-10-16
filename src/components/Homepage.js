import React, { useState } from "react";

export default function Homepage() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Chicken Alfredo Penne",
      cooktime: "33 minutes",
    },
    {
      id: 1,
      title: "Honey Soy Glazed Salmon",
      cooktime: "15 minutes",
    },
    {
      id: 1,
      title: "Chicken Tikka Masala",
      cooktime: "90 minutes",
    },
    {
      id: 1,
      title: "Zucchini Lasagna",
      cooktime: "90 minutes",
    },
  ]);

  console.log(recipes);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
