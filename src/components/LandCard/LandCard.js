import React from "react";
import "./LandCard.css";

const LandCard = props => (
  <div className="card " onClick={() => props.cardClick(props.id)}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default LandCard;
