import React,{useState} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import Swal from "sweetalert2"
import Switch from "react-switch";

import {
    printBody, 
    changeStateSlice, 
    checkThatHaveOnlyOneTrue, 
    checkThatHaveAllAsnwers, 
    checkThatQuestionIsNotEmpty,
    checkThatLevelIsNotEmpty,
    checkAllValidations,
    joinAnswersAndBool} 
from "./QuetionFactory.js"

import "./QuestionFactory.css"


const QuestionFactory = () =>{

    const {register, handleSubmit} = useForm();
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [checkedThree, setCheckedThree] = useState(false)
    const [checkedFour, setCheckedFour] = useState(false)

    const onSubmitUserForm = (data) =>{

            const arrayBooleans = [checkedOne, checkedTwo, checkedThree, checkedFour]
            const arrayAnswers = [
                data.answer1,
                data.answer2,
                data.answer3,
                data.answer4]
            // const result1 = checkThatHaveOnlyOneTrue(arrayBooleans)
            // console.log(result1)
            
            // const validation = checkThatHaveAllAsnwers(arrayAnswers)
            // console.log(validation)

            // const validation2 = checkThatQuestionIsNotEmpty(data.question)
            // console.log(validation2)

            // const validation3 = checkThatLevelIsNotEmpty(data.level)
            // console.log(validation3)
            checkAllValidations(arrayBooleans, arrayAnswers,data.question, data.level)
            const answersJoined = joinAnswersAndBool(arrayAnswers, arrayBooleans)
            
            const body ={
            idLevel: parseInt(data.level),
            question: data.question,
            answers: answersJoined,
        }
        printBody(body)
    }

    // const changeStateSlice = (booleanValue) =>{
    //     return booleanValue === true ?  false : true
    // }

    // const checkThatHaveOnlyOneTrue = (booleanArray) =>{
    //     const result = booleanArray.filter(condition => condition === true)

    //     if (result.length > 1 || result.length === 0)
    //     return false
    //     else if (result.length === 1)
    //     return true
        
    // }

    return (
        <form onSubmit={handleSubmit(onSubmitUserForm)} className = "questionfactory">
            <p>Ingresa la pregunta</p>
            <div className = "questionfactory-questionlevel">
            <div>
                <input 
                type="" 
                placeholder="question"
                {...register("question")}/>
            </div>
            <div>
                <select 
                name="" 
                id=""
                {...register("level")}>
                    <option value="">seleccione ...</option>
                    <option value="1">level 1</option>
                    <option value="2">level 2</option>
                </select>
            </div>
            </div>
            
            <div className = "questionfactory-answers">
                <div className = "questionfactory-answers-internal">
                <input 
                type="text" 
                placeholder="answer 1"
                {...register("answer1")}/>
                <Switch
                onChange={(e) => setCheckedOne(changeStateSlice(checkedOne))}  
                checked={checkedOne}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}/>
                </div>
                <div className = "questionfactory-answers-internal">
                <input 
                type="text" 
                placeholder="answer 2"
                {...register("answer2")}/>
                <Switch
                {...register("check2")}
                onChange={(e) => setCheckedTwo(changeStateSlice(checkedTwo))} 
                checked={checkedTwo}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                />
                </div>
                <div className = "questionfactory-answers-internal">
                <input 
                type="text" 
                placeholder="answer 3"
                {...register("answer3")}/>
                <Switch 
                {...register("check3")}
                onChange={(e) => setCheckedThree(changeStateSlice(checkedThree))} 
                checked={checkedThree}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}/>
                </div>
                <div className = "questionfactory-answers-internal">
                <input 
                type="text" 
                placeholder="answer 4"
                {...register("answer4")}/>
                <Switch
                {...register("check4")}
                onChange={(e) => setCheckedFour(changeStateSlice(checkedFour))}  
                checked={checkedFour}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}/>
                </div>  
            </div>
            <button type="submit">enviar</button>
        </form>
    )
}

export default QuestionFactory;