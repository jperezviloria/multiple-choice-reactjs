import React from "react"
import "./Header.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


const Header = () =>{
    return(
        <div className="header-style">
            <Link className="header-style-link" to="/questionfactory">Question Factory</Link>
            <Link className="header-style-link" to="/showquestion">Show Questions</Link>
            <Link className="header-style-link" to="/testtypefactory">Test type Factory</Link>
            <Link className="header-style-link" to="/questionfactory">Show Test type</Link>
        </div>
    )
}

export default Header;
