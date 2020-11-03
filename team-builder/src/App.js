import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const teamList = [{
  name: 'Danielle Koduru',
  email: 'daniellekoduru@teams.com',
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
}]

function App() {

  const [teamMembers, setTeamMembers] = useState(teamList)

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />

      {teamMembers.map((teamMember, index) => {
        return <><h2 key={index}>{teamMember.name}</h2>
          <p>{teamMember.role}</p>
          <p>contact info: {teamMember.email}</p></>
      })}
    </div>
  );
}


export default App;
