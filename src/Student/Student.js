import React from 'react';

const student = props => {
    return (
        <div>
            <p>Student {props.fname} {props.lname} {props.gender}</p>
            <button onClick={props.changeGender}>Change Gender</button>
        </div>
    );
}

export default student;