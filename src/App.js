import React from "react";
import HeaderComponent from "./components/header/Header"
import QuestionFactory from "./pages/questionFactory/QuestionFactory"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const App = () =>{
  return (
    <Router>
      <div className="App"> 
        <HeaderComponent/>
        <Switch>
          <Route path="/questionfactory">
            <QuestionFactory/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
