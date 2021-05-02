import React from "react";
import HeaderComponent from "./components/header/Header"
import QuestionFactory from "./pages/questionFactory/QuestionFactory"


function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <QuestionFactory/>
    </div>
  );
}

export default App;
