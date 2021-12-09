import React from "react";
import "./section.scss";

//components
// import Button from "../../component ";

const backgroundStyle = (background, color = "var(--color-blue") => {
  return {
    color: color,
    background: background,
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
  };
};

const Subscription = ({
  shortDescription,
  heading,
  about,
  buttons,
  longDescription,
  background,
  backgroundImage,
  color,
}) => {
  return (
    <div className="subscription" style={backgroundStyle(background, color)}>
      <div className="row">
        <div className="col-1-of-2">
          <h4 className="heading-tetiary">{shortDescription}</h4>
          <h1 className="heading-primary">{heading}</h1>
          <p className="heading-secondary">{about}</p>
          <div className="buttonSpace"> {buttons}</div>
          <p className="heading-smallest">{longDescription}</p>
        </div>
        <div className="col-1-of-2">
          <div style={backgroundStyle(backgroundImage)}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
