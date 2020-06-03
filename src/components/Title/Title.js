import React from "react";
import "./Title.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;