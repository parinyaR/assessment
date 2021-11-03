import React, { useEffect } from "react";
import { useMemo } from "react";
import './ListPerson.css'
import useHttp from "../http/use-http";
import { getAllPerson } from "../lib/api";
import ButtonAction from "../component/ButtonAction";
import Notfoundpage from "../pages/Notfoundpage";

const ListPerson = (props) => {
  const { sendRequest, status, data: loadPerson, error } = useHttp(
    getAllPerson,
    true
  );

  useMemo(() => {
    sendRequest();
  }, [props.isLoading, props.isRemoveLoading, props.isUpdateLoading]);

  if (status == 'pending') {
    console.log(props.isLoading);
    return (
      <div className='centered'>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
  if (status === 'completed' && (!loadPerson || loadPerson.length === 0)) {
    return (
      <div className="centered">
        <label className="empty_text">
          Your collection list is empty.
        </label>
      </div>
    );
  }


  return (
    <div className="list-table">
      <div className="list-header-text">Person List</div>
      <div className="list-header">
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>Contact</div>
        <div></div>
      </div>
      

      {loadPerson.map((value) => (
        <div className="list-body" key={value.id}>
          <div className="list-item" >{value.id_run?value.id_run:value.id}</div>
          <div className="list-item" >{value.name}</div>
          <div className="list-item" >{value.email}</div>
          <div className="list-item" >{value.phone}</div>
          <ButtonAction
            data={value}
            onUpdatePerson={props.onUpdatePerson}
            onDeletePerson={props.onDeletePerson}
            id={value.id} />
        </div>
      ))}

    </div>
  )

}

export default ListPerson;