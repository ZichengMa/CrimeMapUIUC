
import React from "react";
import './page.css';
import { useState } from 'react';
import Axios from 'axios'
import Select from 'react-select'

const Insert = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [password, setpassword] = useState("");
    const Sex_Option = [{value: "male",   label: "male"},
                        {value: "female", label: "female"},
                        {value: "other",  label: "other"}]
    const [success, setSuccess] = useState(false);
    const adduser = async () =>{
      await Axios.post('http://localhost:3001/insert', {
        name: name, 
        sex: sex.value, 
        password: password}).then(() => {
          setSuccess(true);
        });
    };
    return (
      <>
        {success ? (
          <section>
            <h1>Success!</h1>
            <p> 
              <a href="/signin">Sign In</a>
            </p>
          </section>
        ) : (
        <div className="App">
        <div className = "information">
            <label>Name:</label>
            <input type = "text" 
            onChange={(event) => {
            setName(event.target.value);
            }}/> 
            <label>Sex:</label>
            <div className='SelectCrimeType'>
              <Select options={Sex_Option}
                      onChange={setSex}/>
            </div>
            <label>password:</label>
            <input type = "text" 
            onChange={(event) => {
            setpassword(event.target.value);
            }}/> 
            <button onClick = {adduser}>Sign Up!</button>
        </div>
        </div>
      ) }
      </>
  );
};
  
export default Insert;