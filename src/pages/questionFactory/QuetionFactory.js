import Swal from "sweetalert2"

export const printBody = (body) =>{
    console.log(body)
}

export const changeStateSlice = (booleanValue) =>{
    return booleanValue === true ?  false : true
}


export const checkThatHaveOnlyOneTrue = (booleanArray) =>{
    const result = booleanArray.filter(condition => condition === true)

    if (result.length > 1 || result.length === 0)
    return false
    else if (result.length === 1)
    return true
    
}

export const checkThatHaveAllAsnwers = (answerArray) =>{
    const result = answerArray.filter(condition => condition === "")

    if (result.length === 0)
    return true
    else 
    return false
}

export const checkThatQuestionIsNotEmpty = (question) =>{

    if (question === "")
    return false
    else 
    return true
}

export const checkThatLevelIsNotEmpty = (level) =>{

    if (level === "")
    return false
    else 
    return true
}

export const checkAllValidations = (booleanArray, answerArray, question, level) => {

    const questionValidation = checkThatQuestionIsNotEmpty(question)
    const levelValidation = checkThatLevelIsNotEmpty(level)
    const answerValidation = checkThatHaveAllAsnwers(answerArray)
    const booleanValidation = checkThatHaveOnlyOneTrue(booleanArray)

    if( questionValidation  === false 
        && levelValidation  === false
        && answerValidation === false
        && booleanValidation === false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The information can`t be empty',
                footer: '<a href>Why do I have this issue?</a>'
              })

    }else if(questionValidation  === false ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The question can`t be empty',
            footer: '<a href>Why do I have this issue?</a>'
          })

    }else if(levelValidation  === false ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You need put level 1 or 2',
            footer: '<a href>Why do I have this issue?</a>'
          })

    }else if(answerValidation  === false ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Every answer should be completed',
            footer: '<a href>Why do I have this issue?</a>'
          })

    }else if(booleanValidation  === false ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The question have only one true answer',
            footer: '<a href>Why do I have this issue?</a>'
          })
    }


}

export const joinAnswersAndBool = (answerArray, booleanArray) => {
    
    var answers = [
        {answer: answerArray[0],
        correct: booleanArray[0]},
        {answer: answerArray[1],
        correct: booleanArray[1]},
        {answer: answerArray[2],
        correct: booleanArray[2]},
        {answer: answerArray[3],
        correct: booleanArray[3]}
    ]
    return answers

}