import React from "react"
import "./ParticularCard.css"

const ParticularCard = (props) =>{

    return (
        <div className = "particular-card">
            <h3>{props.question}</h3>
            <p className = {"particular-card-answer-" + props.correct0}>{props.answer0}</p>
            <p className = {"particular-card-answer-" + props.correct1}>{props.answer1}</p>
            <p className = {"particular-card-answer-" + props.correct2}>{props.answer2}</p>
            <p className = {"particular-card-answer-" + props.correct3}>{props.answer3}</p>
            
        </div>
    )
}

export default ParticularCard;
