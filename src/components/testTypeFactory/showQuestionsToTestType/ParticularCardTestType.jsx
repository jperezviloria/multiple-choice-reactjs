import React from "react"
import "./ParticularCardTesttype.css"

const ParticularCard = ({questions, setQuestionSelected}) =>{
  return (
    <div className="particular-card-testtype">
      {questions.map((oneQuestion) => (
        <div>
          <h3>{oneQuestion.question}</h3>
          <button
            type="button"
            value={oneQuestion}
            onClick={() => setQuestionSelected(oneQuestion)}
          >
            select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ParticularCard;
