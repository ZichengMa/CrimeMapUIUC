import React from "react";
import './page.css';
import { useState, useContext } from 'react';
import Axios from 'axios'
import { LoginContext } from "../context/LoginContext";

const Signin = () => {
  const {setUserLogin} = useContext(LoginContext);
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignIn = async (e) =>{
    e.preventDefault();

      await Axios.post('http://localhost:3001/signin', {
        user: user, 
        password: password}).then((response) => {
          if(response.data.length !== 0){
            setSuccess(true);
            setUserLogin(user);
          }else{
            setSuccess(false);
            alert("Login in failed, please try again");
          }
      });
    };
  
  return (
    <>
      {success ? (
        <section>
          <h1> You are logged in!</h1>
          <br />
          <p>
            <a href="/index"> Go to Home</a>
          </p>
        </section>
      ) : (
      <div className="App">
        <div className = "information">
            <label htmlFor="userid">UserID:</label>
            <input type = "number" 
              placeholder="10001"
              onChange={(event) => {
                setUser(event.target.value);
            }}/> 
            <label htmlFor="password">Password:</label>
            <input type = "password" 
              placeholder="abcd123"
              onChange={(event) => {
                setPassword(event.target.value);
            }}/> 
            <button onClick = {handleSignIn}>Sign In</button>
          <p> 
            Need an Account? <br />
            <span>
              <a href="/insert">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
      )}
    </>
  );
};
  
export default Signin;