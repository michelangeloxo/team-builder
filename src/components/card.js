import React from 'react'; 

// { name: "", email: "", role: "" }; 

const Card = (props) => {
    const person = props.person; 
    return (
        <div>
<div>{person.name}</div>
<div>{person.email}</div>
<div>{person.role}</div>
        </div>
    )
};


export default Card; 