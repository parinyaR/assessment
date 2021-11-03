import React from "react";
import { useParams } from "react-router-dom";
import './Detailpage.css'
import phone from '../img/phone.png';
import back from '../img/back.png';
import { Link } from "react-router-dom";
import avatar from '../img/avatar.png';
import useHttp from "../http/use-http";
import { getSinglePerson } from "../lib/api";
import { useEffect } from "react/cjs/react.development";
import Notfoundpage from "./Notfoundpage";



const Detailpage = () => {
  const { sendRequest, status,data:loadPerson,error } = useHttp(getSinglePerson , true)
  const params = useParams();

  console.log(params.id);
  // const person = DUMMY.find((person) => person.id == params.id);
  // console.log(person);

  useEffect(()=>{
    sendRequest(params.id)
  },[sendRequest])

  if (status == 'pending') {
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
    return <Notfoundpage />;
  }

 
  return (
    <div className="detail-container">
      <div className="detail-card">

        <div className="card-layout">
          <Link to="/" className="back-icon">
            <img src={back} /></Link>
          
          <div className="detail-box">
            <div className="detail-name">{loadPerson.name}</div>
            <div className="detail-email">{loadPerson.email}</div>

          </div>
          <div className="detail-contact">
            <img src={phone} /> {loadPerson.phone}
          </div>



        </div>

      </div>
    </div>
  )

}

export default Detailpage;