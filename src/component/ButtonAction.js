import React, { useEffect } from "react";
import './ButtonAction.css'
import { Link } from "react-router-dom";
import useHttp from "../http/use-http";
import { removePerson } from "../lib/api";


const ButtonAction = (props) => {

    
    const removePersonHandler = () =>{
        props.onDeletePerson(props.id)

    }

    const updatePersonHandler = () =>{
        props.onUpdatePerson(props.data)
    }

    return (
        <div className="list-item">

            <Link className="btn" to={`/detail/${props.id}`}>View</Link>
            <div className="btn" onClick={updatePersonHandler}>Update</div>
            <div className="btn" onClick={removePersonHandler}>Delete</div>
        </div>
    )
}

export default ButtonAction;