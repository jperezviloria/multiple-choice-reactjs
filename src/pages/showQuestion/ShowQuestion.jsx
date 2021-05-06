import React from "react"
import ParticularCard from "../../components/ShowQuestion/ParticularCards/ParticularCard.jsx"
import LevelSelector from "../../components/LevelSelector/LevelSelector.jsx"
import "./ShowQuestion.css"
const ShowQuestion = () =>{
  return (
    <div className="show-question">
      <LevelSelector className="show-question-levelSelector"/>
      <div className="show-question-particularcard">
        <ParticularCard />
        <ParticularCard />
        <ParticularCard />
        <ParticularCard />
        <ParticularCard />
      </div>
    </div>
  );
}

export default ShowQuestion; 
