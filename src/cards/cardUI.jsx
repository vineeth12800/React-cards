import React from "react";
import "./card-style.css";

const cards = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <a href="https://picsum.photos/id/0/info" className="btn btn-outline-success">
          Download{" "}
        </a>
      </div>
    </div>
  );
};

export default cards;
