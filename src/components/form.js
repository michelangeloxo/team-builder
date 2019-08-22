import React, { useState } from 'react';
import { precompile } from 'handlebars';

const Form = (props) => {
    const { setTeamMembers } = props;
    const [person, setPerson] = useState({name: "", email: "", role: ""}); 
const handleSubmit = event => {
    event.preventDefault();
    setTeamMembers(people => [...people, person]); 
    setPerson({name: "", email: "", role: ""}); 
};
return (
<form onSubmit={handleSubmit}>
<input placeholder='name' value={person.name} onChange={event => { setPerson({...person, name: event.target.value});}} />
<input placeholder='email' value={person.email} onChange={event => { setPerson({...person, email: event.target.value});}} />
<input placeholder='role' value={person.role} onChange={event => { setPerson({...person, role: event.target.value});}}/>

<button type='submit'>Add Member</button>

</form>


);    


};

export default Form; 