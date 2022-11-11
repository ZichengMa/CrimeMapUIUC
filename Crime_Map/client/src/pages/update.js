import './update.css';
import { useState } from 'react';
import Axios from 'axios';
import { id } from 'date-fns/locale';

function Update() {
  const [newDescription, setNewDescription] = useState("");
  const [newId, setNewId] = useState(0);

  const updateCrime = () => {
    Axios.put("http://localhost:3001/update",{
      description: newDescription,
      id: newId
    }).then((response) => {
      alert("update")
    })
  }

  return (
    <div className="update">
      <p> Insert the CrimeID you want to update </p>
      <input 
          type="number" 
          placeholder="00000" 
          onChange = {(event) => {
            setNewId(event.target.value);
          }}
      />
      <p> Write the new description for this crime </p>
      <input 
          type="text" 
          placeholder="This is a new description" 
          onChange = {(event) => {
            setNewDescription(event.target.value);
          }}
      />
      <button onClick={updateCrime}> Update </button>
    </div>
  );
}

export default Update;

