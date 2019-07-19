import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {StarWarsPeople} from './components/StarWarsPeople'

import './App.css';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  // const
const App = () => {
 const [names, setNames] = useState([])
 const [index, setIndex] = useState([names])
console.log('checkName State', names)
console.log('checkIndex State', index)
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      const res = response.data.results
      for (let i = 0; i < names.length; i++){
        return names[index]
      }
      console.log('dataObj', res) 
      setNames(res[0].name)
      // console.log('nameresult', res  )
      // console.log('names = ', names)
    })
     .catch(error => {
       console.log("Server API not functioning", error)
     }) 

    
  },[index])

  return (
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {/* {names} */}
        {/* {names.map((index) => {return <StarWarsPeople info={index} />})} */}
        <StarWarsPeople info={names}/>

    </div>
  );
}

export default App;
