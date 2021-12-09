import React from "react";
import "./button.scss";

const backgroundStyle = (background, color) => {
  return {
    color: color,
    background: background,
  };
};

const Button = ({ textContent, background, color }) => {
  return (
    <a className="btn" style={backgroundStyle(background, color)}>
      {textContent}
    </a>
  );
};

export default Button;
