import './search.css';
import { useState } from 'react';
import Axios from 'axios';

function Advanced2() {
  const [searchResult, setSearchResult] = useState('');
  const [crime_list, setCrimeList] = useState([]);
  /* Advanced2 function */
  const search =  () =>{
      Axios.post('http://localhost:3001/advanced2', {
      }).then((response) => {
        /* Judge whether we get valid data from mysql */
        if(response.data.length!=0){
          setCrimeList(response.data);
          setSearchResult('Here is your result!\n');
        }else{
          setSearchResult('No records according to your conditions!\n');
        }
      });
  };

  return (
    <div className="App">
      <div className = "search_bar">
        <button onClick={search}>Search</button>
        <div>{searchResult}</div>
        {crime_list.map( (val, key) => {
          return (
          <div className='SearchResult'> 
            <h3>Name: {val.Name}</h3> 
            <h3>Level: {val.level}</h3>
            <h3>Levelnum: {val.num}</h3> 
            
          </div>
          );
        })}
      </div>


    </div>
  );
}

export default Advanced2;