import React from "react";
import "../Card/Card.css";

const Card = ({ img, title, text, sentence }) => {
  return (
    <div className="container-card">
      <div className="container-sentence">
        <p className="sentence">{sentence}</p>
      </div>
      <img src={img} width={500} height={700} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
