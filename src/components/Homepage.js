import React, { useState } from "react";
import AddRecipeForm from "./AddRecipeForm";
import RecipeCard from "./RecipeCard";

function compare_likes(recipe_a, recipe_b) {
  return recipe_b.likes - recipe_a.likes;
}

export default function Homepage() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Chicken Alfredo Penne",
      cooktime: "33 minutes",
      img:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/9768.jpg",
      link: "https://tasty.co/recipe/easy-chicken-alfredo-penne",
      likes: 11,
      dislikes: 3,
    },
    {
      id: 2,
      title: "Honey Soy Glazed Salmon",
      cooktime: "15 minutes",
      img:
        "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/11/14/asset/buzzfeed-prod-fastlane-01/sub-buzz-26808-1484162594-1.jpg",
      link: "https://tasty.co/recipe/honey-soy-glazed-salmon",
      likes: 13,
      dislikes: 1,
    },
    {
      id: 3,
      title: "Chicken Tikka Masala",
      cooktime: "90 minutes",
      img:
        "https://img.buzzfeed.com/video-api-prod/assets/d03461e6d185483da8317cf9ee03433e/BFV18861_ChickenTikkaMasala-ThumbA1080.jpg",
      link: "https://tasty.co/recipe/homemade-chicken-tikka-masala",
      likes: 8,
      dislikes: 3,
    },
    {
      id: 4,
      title: "Zucchini Lasagna",
      cooktime: "90 minutes",
      img:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c37efd97131f4cd4bc48acc314ab7f34/zucchinilasagnafb.jpg",
      link: "https://tasty.co/recipe/zucchini-lasagna",
      likes: 10,
      dislikes: 0,
    },
  ]);

  console.log(recipes);

  const recipes_sorted = [...recipes].sort(compare_likes);

  return (
    <div className="container">
      <h1>Feed</h1>
      <AddRecipeForm />

      {recipes_sorted.map(function (recipe) {
        return (
          <RecipeCard
            title={recipe.title}
            cooktime={recipe.cooktime}
            img={recipe.img}
            link={recipe.link}
            likes={recipe.likes}
            dislikes={recipe.dislikes}
          />
        );
      })}
    </div>
  );
}
