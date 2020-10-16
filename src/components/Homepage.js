import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Homepage() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Chicken Alfredo Penne",
      cooktime: "33 minutes",
      img:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/9768.jpg",
      link: "https://tasty.co/recipe/easy-chicken-alfredo-penne",
    },
    {
      id: 1,
      title: "Honey Soy Glazed Salmon",
      cooktime: "15 minutes",
      img:
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/11/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-26808-1484162594-1.jpg",
      link: "https://tasty.co/recipe/honey-soy-glazed-salmon",
    },
    {
      id: 1,
      title: "Chicken Tikka Masala",
      cooktime: "90 minutes",
      img:
        "https://img.buzzfeed.com/video-api-prod/assets/d03461e6d185483da8317cf9ee03433e/BFV18861_ChickenTikkaMasala-ThumbA1080.jpg",
      link: "https://tasty.co/recipe/homemade-chicken-tikka-masala",
    },
    {
      id: 1,
      title: "Zucchini Lasagna",
      cooktime: "90 minutes",
      img:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c37efd97131f4cd4bc48acc314ab7f34/zucchinilasagnafb.jpg",
      link: "https://tasty.co/recipe/zucchini-lasagna",
    },
  ]);

  console.log(recipes);

  return (
    <div className="container">
      <h1>Feed</h1>

      {recipes.map(function (recipe) {
        return (
          <RecipeCard
            title={recipe.title}
            cooktime={recipe.cooktime}
            img={recipe.img}
            link={recipe.link}
          />
        );
      })}
    </div>
  );
}
