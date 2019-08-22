import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Form from './components/form';
import { NAME_CHAR } from 'xmlchars/xml/1.0/ed5';

function App() {
  const { setTeamMembers} = props;
  const [teamMembers, setTeamMembers] = useState([
    {name: 'Riff Haus', email: 'Psych@wifi.com', role: 'Mind Reader'},
    {name: 'Marlee Bob', email: 'stayTrue@nah.com', role: 'Peace Maker'},
  ])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
      < Form setTeamMembers = { setTeamMembers } /> 
      {teamMembers.map(person => <Card person={ person } /> )}
      < Card person={{name: 'Michael Demery', email: 'braveheart@yeah.com', role: 'Project Manager'}} />  
      </header>
    </div>
  );
}

export default App;
