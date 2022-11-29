
import React from "react";
import './page.css';
import { useState} from 'react';
import Axios from 'axios'

const Signin = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignIn = async (e) =>{
    e.preventDefault();

      await Axios.post('http://localhost:3001/signin', {
        user: user, 
        password: password}).then((response) => {
          if(response.data.length !== 0){
            //setAuth(user, password);
            setSuccess(true);
          }else{
            setSuccess(false);
            console.log("Login in failed, please try again");
          }
          //console.log(response.data);
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