import React from 'react';
import './People.css'
import fakeData from '../../fakeData';
import { useState } from 'react';
import User from '../User/User';
import Salary from '../Salary/Salary';
const People = () => {
        const first15 = fakeData.slice(0,15);
        const [people, setPeople]=useState(fakeData)
        const [connect, setConnect]=useState([])

        const handleAddUser = (people)=>{
            // const salary = people.salary
            const newConnect = [...connect,people]
            setConnect(newConnect)
            
        }
       

    return (
        <div className="people-container">
            <div className="user-container">
                {
                    people.map(pl=><User
                        handleAddUser ={handleAddUser}
                        people={pl}></User>)
                }
            </div>
            <div className="salary">
                <Salary connect ={connect}></Salary>
            </div>
        </div>
    );
};

export default People;