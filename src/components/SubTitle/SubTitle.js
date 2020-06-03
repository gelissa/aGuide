import React from "react";
import "./SubTitle.css";

function SubTitle(props) {
  return <h3 className="subtitle">{props.children}</h3>;
}

export default SubTitle;