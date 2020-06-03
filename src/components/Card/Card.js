import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
       <div className="card-header text-center">
       <strong> {props.name}</strong>
  </div>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Bio:</strong> {props.bio}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
