import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron">
        <h1 className="title">{props.title}</h1>
        <h4 className="instructions">{props.instructions}</h4>
        <div className="justify-content-md-center">
            <span className="score" >Score: {props.score}</span>
            <span className="highscore">Highscore: {props.highscore}</span>
        </div>
        
    </div>
)

export default Title;
