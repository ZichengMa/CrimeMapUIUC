import './update.css';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { id } from 'date-fns/locale';
import { LoginContext } from "../context/LoginContext";
function Update() {
  const {userLogin} = useContext(LoginContext);
  const [newDescription, setNewDescription] = useState("");
  const [newId, setNewId] = useState(0);
  const [crime_list, setCrimeList] = useState([]);
  const updateCrime = () => {
    if(userLogin == null){
      alert("Please login in first!")
    }else{
      Axios.put("http://localhost:3001/update",{
        description: newDescription,
        id: newId,
        userID: userLogin,
      }).then((response) => {
        if(response.data == 0){
          alert("Sorry, this crime is not reported by you so you can not modify it!")
        }else{
          alert("Update successfully")
        }
      })
    }
  }
  const checkCrime = () => {
    console.log(userLogin)
    if(userLogin == null){
      alert("Please login in first!")
    }else{
      Axios.put("http://localhost:3001/update_checkcrime",{
        userID: userLogin,
      }).then((response) => {
        console.log(response.data)
        setCrimeList(response.data)
      })
    }
  }


  return (
    <div className="update">
      <p> Please Check the crimes you reported firstly </p>
      <button onClick={checkCrime}> Check crimes </button>
      {crime_list.map( (val, key) => {
          return (
          <div className='SearchResult'> 
            <h3>CrimeID: {val.CrimeID}</h3> 
          </div>
          );
        })}
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

