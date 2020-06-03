import React from "react";
import "./ResourceCard.css";

function ResourceCard(props) {
  return (
    <div class="card">
       <h5 class="card-header text-center">{props.header}</h5>
    <div class="card-body text-center">
      {props.children}
    </div>
  </div>
  );
}

export default ResourceCard;
