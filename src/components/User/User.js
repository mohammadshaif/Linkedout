import React from 'react';
import "./User.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlug } from '@fortawesome/free-solid-svg-icons'
const User = (props) => {
    const {name,username,email,phone,salary,img}=props.people
    return (
        <div className='user'>
            <div>
                <img src={img} alt=""/>
                
            </div>
            <div className="user-name">
                <h1> {name} </h1>
                <br/>
                <p><b>Mail Address:</b>  {email} </p>
                <p>Contact No. {phone} </p>
                <h4>Monthly Salary ${salary} </h4>

            </div>
            <div className="user-btn"
            onClick={()=> props.handleAddUser(props.people)}
            >
                <button>  <FontAwesomeIcon icon={faPlug} />Connect</button>
            </div>
        </div>
    );
};

export default User;