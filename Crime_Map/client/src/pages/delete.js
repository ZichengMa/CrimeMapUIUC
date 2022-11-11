
import React from "react";
import './page.css';
import { useState } from 'react';
import Axios from 'axios'
  
const Delete = () => {
  const [id, setID] = useState(0);
  const deleteuser = async () =>{
    await Axios.post('http://localhost:3001/delete', {
        id: id}).then(() => {
        console.log("success");
      });
    };
    return (
        <div className="DeleteApp">
          <div className = "DeleteInfo">
              <label>UserID:</label>
              <input type = "text" 
              onChange={(event) => {
              setID(event.target.value);
              }}/> 
              <button onClick = {deleteuser}>Delete User</button>
          </div>
        </div>
  );
};
  
export default Delete;