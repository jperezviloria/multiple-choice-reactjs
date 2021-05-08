import React, {useEffect, useState} from "react"
import LevelSelector from "../../components/LevelSelector/LevelSelector.jsx" 
import FinalTest from "../../components/testTypeFactory/finalTest/FinalTest.jsx"
import ParticularCardToTest from "../../components/testTypeFactory/showQuestionsToTestType/ParticularCardTestType"
import "./TestTypeFactory.css"


const TestTypeFactory = () =>{

const [questions, setQuestions] = useState([])
const [questionSelected, setQuestionSelected] = useState([])

  useEffect(() =>{

  }, [questions])
  return (
    <div>
      <LevelSelector setQuestions={setQuestions} />
      <div className="division-test-type">
        <FinalTest />
        <ParticularCardToTest questions={questions} />
      </div>
    </div>
  );
}

export default TestTypeFactory;
