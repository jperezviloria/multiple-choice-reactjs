import React from "react"
import "./LevelSelector.css"

const LevelSelector = () => {
  return (
  <div>
    <form className="LevelSelector">
    <select>
      <option value= "">seleccione ...</option> 
      <option value="1">level 1</option>
      <option value = "2">level 2</option>
    </select>
    <button type="submit">search </button>
    </form>
    </div> 
  )
}

export default LevelSelector; 
