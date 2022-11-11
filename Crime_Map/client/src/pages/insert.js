
import React from "react";
import './page.css';
import { useState } from 'react';
import Axios from 'axios'

const Insert = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [passward, setPassward] = useState("");
    const adduser = async () =>{
      await Axios.post('http://localhost:3001', {
        name: name, 
        sex: sex, 
        passward: passward}).then(() => {
          console.log("success");
        });
    };
    return (
        <div className="App">
        <div className = "information">
            <label>Name:</label>
            <input type = "text" 
            onChange={(event) => {
            setName(event.target.value);
            }}/> 
            <label>Sex:</label>
            <input type = "text" 
            onChange={(event) => {
            setSex(event.target.value);
            }}/> 

            <label>Passward:</label>
            <input type = "text" 
            onChange={(event) => {
            setPassward(event.target.value);
            }}/> 
            <button onClick = {adduser}>Sign in</button>
        </div>
        </div>
  );
};
  
export default Insert;