import React, { useState } from 'react';
import './App.css';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [members, setMembers] = useState([]); //holds the form data
  const [formValues, setFormValues] = useState(initialFormValues); //holds the form values
  console.log(members, formValues);

  return (
    <div className="App">
      <h1>Team Builder</h1>
    </div>
  );
}

export default App;
