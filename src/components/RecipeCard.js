import React from "react";
import "../style/global.scss";
import "./RecipeCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function RecipeCard(props) {
  const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} size="xs" />;
  const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} size="xs" />;

  const onClickIncrement = () => {
    props.incrementLikes(props.id);
    console.log(props.id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <img src={props.img} alt="" />
          <h5 className="card-title">{props.title}</h5>
          <p>Cooktime: {props.cooktime}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success">show me the recipe!</button>
          </a>
        </div>
        <div className="ratingButtons">
          <button onClick={onClickIncrement} className="btn btn-success">
            {thumbsUp} {props.likes}
          </button>
          <button className="btn btn-danger">
            {thumbsDown} {props.dislikes}
          </button>
        </div>
      </div>
    </div>
  );
}
