import React from "react"
import "./LevelSelector.css"
import {useForm} from "react-hook-form"
import axios from "axios"


const LevelSelector = ({setQuestions}) => {

  const {register, handleSubmit} = useForm()

  
  const onSubmitFindById = async (data) => {
    
    const level = {
      idLevel: parseInt(data.level),
    };
    console.log(level)
    const request = await axios
      .post(`/question/factory/byid`, level)
      .then((response) => {
        console.log(response.data);
	setQuestions(response.data)
      });
  };

  return (
  <div>
    <form className="LevelSelector" onSubmit={handleSubmit(onSubmitFindById)}>
    <select
    {...register("level")}>
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
