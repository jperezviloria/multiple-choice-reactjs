import React from "react"
import EachQuestionSelected from "../eachQuestionSelected/eachQuestionSelected.jsx"

const FinalTest = () =>{
  return (
    <form>
      <h2>Test Type</h2>
      <h1>Level N</h1>
      <EachQuestionSelected />
      <button type="submit"> create</button>
    </form>
  );
}

export default FinalTest;
