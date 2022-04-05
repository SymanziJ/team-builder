import React, { useState } from 'react';
import './App.css';



const memberList = [
  {
    name: 'Mason Lyons',
    email: 'masonLyons@gmail.com',
    role: 'backend engineer'
  },
  {
    name: 'Shannon DeLap ',
    email: 'delaptrap@gmail.com',
    role: 'designer'
  },
  {
    name: 'Peter Farris',
    email: 'farrisP@gmail.com',
    role: 'intern'
  }
]


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [members, setMembers] = useState(memberList); //holds the form data
  const [formValues, setFormValues] = useState(initialFormValues); //holds the form values
  //console.log(members, formValues);

  return (
    <div className="App">
      <h1>Team Builder</h1>

      {
        memberList.map((member, idx) => {
          return (
            <div key={idx}>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
