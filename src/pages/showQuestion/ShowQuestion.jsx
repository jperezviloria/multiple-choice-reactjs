import React, {useEffect, useState} from "react"
import ParticularCard from "../../components/ShowQuestion/ParticularCards/ParticularCard.jsx"
import LevelSelector from "../../components/LevelSelector/LevelSelector.jsx"
import "./ShowQuestion.css"
const ShowQuestion = () =>{


  const [questions, setQuestions] = useState([])

  useEffect(() =>{
   console.log(questions) 
  }, [questions])
  return (
    <div className="show-question">
      <LevelSelector
        setQuestions={setQuestions}
        className="show-question-levelSelector"
      />
      <div className="show-question-particularcard">
    {
      questions.map((qq) => (
      
	<ParticularCard 
	question={qq.question}
	answer0={qq.answers[0].answer}
	answer1={qq.answers[1].answer}
	answer2={qq.answers[2].answer}
	answer3={qq.answers[3].answer}
	correct0={qq.answers[0].correct}
	correct1={qq.answers[1].correct} 
	correct2={qq.answers[2].correct} 
	correct3={qq.answers[3].correct} />
      ))}
      </div>
    </div>
  );
}

export default ShowQuestion; 
