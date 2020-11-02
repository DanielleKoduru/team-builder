import React, { useState } from 'react';
import './App.css';
import Form from './Form';


const initalTeamList = [
  {
    name: 'Danielle Koduru',
    email: 'danielleKoduru@teams.com',
    role: 'Front-End Developer',
  },
  {
    name: 'Clare Jackson',
    email: 'clarejackson@teams.com',
    role: 'Front-End Developer',
  },
  {
    name: 'Bradley Dion',
    email: 'badleydion@teams.com',
    role: 'Backend-End Developer',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};


function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <div className="App">
      <header>
        <h1>Team Builder Form</h1>
      </header>
      <Form />
      {initalTeamList.map((teamMembers, index) => {
        return ([<h2 key={index}>{teamMembers.name}</h2>,
        <p key={index}>{teamMembers.role}</p>,
        <p key={index}>contact info: {teamMembers.email}</p>
        ])
      })}
    </div>
  );
};


export default App;
