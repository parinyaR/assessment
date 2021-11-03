import React, { useEffect } from 'react';
import './Input.css'


const Input = (props) => {

    
    
    return (
        // <div className="add_person">
         <div className={`add_person ${props.classes}`}>
            <label htmlFor={props.text}>{props.text}</label>
            <input pattern={props.pattern} id={props.text} value={props.value} onChange={props.onInput} type={props.type} />
        </div>
    )

}

export default Input;