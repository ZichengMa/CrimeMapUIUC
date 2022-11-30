import './search.css';
import { useState } from 'react';
import Axios from 'axios';

function WeeklyReport() {
    const [crime_list, setCrimeList] = useState([]);
    const [searchResult, setSearchResult] = useState('');
  /* WeeklyReport function */
  const search =  () =>{
      Axios.post('http://localhost:3001/weeklyreport', {
      }).then((response) => {
        /* Judge whether we get valid data from mysql */
        if(response.data.length !== 0){
          setCrimeList(response.data);
          setSearchResult('Here is your result!\n');
        }else{
          setSearchResult('No records according to your conditions!\n');
        }
      });
  };

  return (
    <div className="App">
      <p> This is the weekly report of our crime map. </p>
        <button onClick={search}>SHOW</button>
        <div>{searchResult}</div>
        {crime_list.map( (val, key) => {
          return (
          <div className='SearchResult'> 
            <h3>Start Date: {val.StartDate}</h3> 
            <h3>Number of Crimes: {val.NumCrimes}</h3>
            <h3>Most Dangerous Street: {val.MostDangerousSt}</h3> 
            <h3>Safest Street: {val.SafestSt}</h3> 
          </div>
          );
        })}


    </div>
  );
}

export default WeeklyReport;