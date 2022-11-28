
import React from "react";
import './page.css';
import { useState } from 'react';
import Axios from 'axios'

const Signin = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const adduser = async () =>{

    };
    return (
      
        <div className="App">
        <div className = "information">
            <label>UserID:</label>
            <input type = "number" 
            placeholder="10001"
            onChange={(event) => {
            setName(event.target.value);
            }}/> 
            <label>Password:</label>
            <input type = "text" 
              placeholder="abcd123"
              onChange={(event) => {
              setPassword(event.target.value);
            }}/> 
            <button onClick = {adduser}>Log In</button>
        </div>
        </div>
      
  );
};
  
export default Signin;