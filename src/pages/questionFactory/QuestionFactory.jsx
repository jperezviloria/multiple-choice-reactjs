import React from "react"
import "./QuestionFactory.css"

const QuestionFactory = () =>{
    return (
        <div>
            <div>
                <p>Ingresa la pregunta</p>
                <input type="" placeholder="question"/>
            </div>
            <div>
                <select name="" id="">
                    <option value="">seleccione ...</option>
                    <option value="">level 1</option>
                    <option value="">level 2</option>
                </select>
            </div>
            <div>
                <div>
                <input type="text" placeholder="answer 1"/>
                <input type="checkbox"/>
                </div>
                <div>
                <input type="text" placeholder="answer 2"/>
                <input type="checkbox"/>
                </div>
                <div>
                <input type="text" placeholder="answer 3"/>
                <input type="checkbox"/>
                </div>
                <div>
                <input type="text" placeholder="answer 4"/>
                <input type="checkbox"/>
                </div>
            </div>
            <button>enviar</button>
        </div>
    )
}

export default QuestionFactory;