import React, { useCallback, useEffect, useMemo, useState } from "react";
import Input from "../component/Input";
import './AddPerson.css'
import Button from "../component/Button";
import { addPerson } from "../lib/api";
import useHttp from "../http/use-http";
import { useHistory } from "react-router";
const FormPerson = (props) => {


    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputContact, setInputContact] = useState("")


    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorContact, setErrorContact] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault()
        if (inputName.trim().length == 0 || inputEmail.trim().length == 0|| (!inputEmail.includes("@")) || !inputEmail.includes(".") || inputContact.trim().length == 0) {


            if (inputName.trim().length == 0) {
                setErrorName(true)
            } else {
                setErrorName(false)
            }
            if (inputEmail.trim().length == 0 || (!inputEmail.includes("@")) || (!inputEmail.includes("."))) {
                setErrorEmail(true)
            } else {
                setErrorEmail(false)
            }
            if (inputContact.trim().length == 0) {
                setErrorContact(true)
            } else {
                setErrorContact(false)
            }
        } else {
            
            if (!errorContact && !errorEmail && !errorName) {
                if (props.mode) {
                    props.onUpdatePerson({
                        name: inputName,
                        email: inputEmail,
                        phone: inputContact
                    }, props.id)
                } else {
                    props.onAddPerson({
                        id_run: Math.floor(Math.random() * 100) + 10,
                        name: inputName,
                        email: inputEmail,
                        phone: inputContact
                    })
                    
                }


                setInputName("");
                setInputEmail("")
                setInputContact("")

            }
        }



    }


    useMemo(() => {
        if(!!props.dataUpdate){
            console.log(props.dataUpdate);
            setInputContact(props.dataUpdate.phone)
            setInputName(props.dataUpdate.name)
            setInputEmail(props.dataUpdate.email)
        }

    }, [props.dataUpdate])

    useEffect(() =>{
        if(inputName.trim().length > 0){
            setErrorName(false)
        }
        if(inputEmail.trim().length > 0){
            setErrorEmail(false)
        }
        if(inputContact.trim().length > 0){
            setErrorContact(false)
        }
    },[inputName,inputEmail,inputContact])


    const inputNameHandler = (event) => {
        setInputName(event.target.value)
    }
    const inputEmailHandler = (event) => {
        setInputEmail(event.target.value)
    }
    const inputContactHandler = (event) => {
        
        setInputContact(event.target.value)
        console.log(event.target.value);
    }
    return (
        <div className="add_person_container">

            <form onSubmit={submitHandler}>
                <Input value={inputName} onInput={inputNameHandler} classes={errorName ? "red-text" : ""} text="Name" type="text" />
                <Input value={inputEmail} onInput={inputEmailHandler} classes={errorEmail ? "red-text" : ""} text="Email" type="text" />
                <Input value={inputContact} onInput={inputContactHandler} classes={errorContact ? "red-text" : ""} text="Contact" type="number" />
                <Button mode={props.mode} />
            </form>
        </div>
    )

}

export default FormPerson;