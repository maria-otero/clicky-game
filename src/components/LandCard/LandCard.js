import React from "react";
import "./LandCard.css";

const LandCard = props => (
  <div className="card " onClick={() => props.cardClick(props.id)}>
      <img alt={props.id} src={props.image} />
  </div>
);


<div class="hover01 column">
  <div>
    <figure><img src="https://nxworld.net/example/css-image-hover-effects/pic01.jpg" /></figure>
    <span>Hover</span>
  </div>
</div>

export default LandCard;
