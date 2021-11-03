import React from "react";

import './Button.css'

const Button = (props) => {
    return (
        <div>


            <br />
            {!props.mode && <button className="button_add">
                Add
            </button>}
            {props.mode && <button className="button_add">
                Update
            </button>}
        </div>
    )
}

export default Button;