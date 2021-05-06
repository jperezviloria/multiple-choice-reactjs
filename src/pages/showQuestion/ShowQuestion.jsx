import React from "react"
import ParticularCard from "../../components/ShowQuestion/ParticularCards/ParticularCard.jsx"

import "./ShowQuestion.css"
const ShowQuestion = () =>{

    return (
        <div className = "show-question">
            <ParticularCard/>
            <ParticularCard/>
            <ParticularCard/>
            <ParticularCard/>
            <ParticularCard/>
        </div>
    )
}

export default ShowQuestion;
