import React from 'react';
import "./Salary.css"

const Salary = (props) => {
    const connect = props.connect
    // 
    let totalSalary = [];
    for (let i = 0; i < connect.length; i++) {
        const element = connect[i];
        const index = totalSalary.indexOf(element)
            if(index == -1){
                totalSalary.push(element)
            }
        
    }
    const totalSalary1 = totalSalary.reduce((total,prd)=>total + prd.salary,0)
    return (
        <div >
            <h1>Total  Details</h1>
            <h5>Your Total Connection [{connect.length}] </h5>
            <p><b>Friends Total Salary-> </b> {totalSalary1} </p>
        </div>
    );
};

export default Salary;