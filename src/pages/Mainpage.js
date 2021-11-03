import React, { useState } from "react";

import FormPerson from "../UI/FormPerson";
import ListPerson from "../UI/ListPerson";

import { useHistory } from "react-router";
import useHttp from "../http/use-http";
import { useEffect } from "react";
import { removePerson } from "../lib/api";

import './Mainpage.css'
import { addPerson } from "../lib/api";
import { updatePerson } from "../lib/api";

const Mainpage = () => {

    const { sendRequest, status } = useHttp(addPerson,true)
    const { sendRequest: sendRequestRemove, status: statusRemove, data, error } = useHttp(removePerson,true)
    const { sendRequest: sendRequestUpdate, status: statusUpdate, data: personUpdate, error: personError } = useHttp(updatePerson,true)
    // const { sendRequestRemove, statusRemove } = useHttpRemove(removePerson);


    // useEffect(() => {

    //     if (status === 'completed') {
    //         console.log("done");
    //     }
    //     if(statusRemove === 'completed'){
    //         console.log("remove done!");
    //     }
    // }, [status,statusRemove]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState("");


    const addPersonHandler = (personData) => {
        sendRequest(personData)
        console.log(status);
    }

    const removePersonHandler = (personID) => {
        sendRequestRemove(personID)
        console.log(statusRemove);
    }

    const updatePersonHandler = (personData) => {
        console.log(personData);
        setDataUpdate(personData)
        setIsUpdate(true)

    }

    const inputUpdatePersonHandler = (personData) => {
        console.log({
            ...personData,
            id: dataUpdate.id
        });
        sendRequestUpdate({
            ...personData,
            id: dataUpdate.id,
            id_run: dataUpdate.id_run
        })
        setIsUpdate(false)
    }





    return (
        <div className="main-container">
            <div className="bg-formperson">
                <div className="bg-img"></div>
                <FormPerson
                    mode={isUpdate}
                    onMode={setIsUpdate}
                    dataUpdate={dataUpdate}
                    onUpdatePerson={inputUpdatePersonHandler}
                    onAddPerson={addPersonHandler} />
            </div>
            <ListPerson
                onUpdatePerson={updatePersonHandler}
                onDeletePerson={removePersonHandler}
                isLoading={status === 'completed'}
                isRemoveLoading={statusRemove === 'completed'}
                isUpdateLoading={statusUpdate === 'completed'}
            />

        </div>

    )
}

export default Mainpage;