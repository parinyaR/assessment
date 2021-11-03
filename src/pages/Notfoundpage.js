import React from "react";
import './Notfoundpage.css'
import back from '../img/back.png'
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div className='notfound-container'>
      <div className="notfound-card">
        <div className="em-container">
          <div className="em-number">404</div>
          <div className="em-text">
            PAGE NOT FOUND
          </div>
          <div className="em-detail">
            Sorry, the page you're looking for doesn't exist.
          </div>
        </div>
        <Link to="/" className="button_back">RETURN HOME</Link>
      </div>
    </div>
  );
};

export default Notfoundpage;
