import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const App = () => {
  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      const res = response.data.results
      console.log('dataObj', res ) 
      // res.map(names => {return <div>{names}</div>})
      setNames(res[0].name)
      {res.map((names) => {return {names}})}
      // console.log('checkHere', index)
      
    })
     .catch(error => {
       console.log("Server API not functioning", error)
     }) 

    
  },[names])
console.log('OutsideNames', names)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
      {names}
      
      {/* {nums.map((names => {return <StarWarsPeople info={names} />}))} */}
      </div>
    </div>
  );
}

export default App;
