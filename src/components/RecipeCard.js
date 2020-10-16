import React from "react";
import { Link } from "react-router-dom";
import "../style/global.scss";
import "./RecipeCard.scss";

export default function RecipeCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} alt="" />
        <h5 className="card-title">{props.title}</h5>
        <p>Cooktime:{props.cooktime}</p>
        <a href={props.link} target="_blank">
          <button className="btn btn-success">show me the recipe!</button>
        </a>
      </div>
    </div>
  );
}
