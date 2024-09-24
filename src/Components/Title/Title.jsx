import React from "react";
import "./Title.css";

export const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};
