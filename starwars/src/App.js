import React, {useState, useEffect} from 'react';
import {StarWarsPeople} from './components/StarWarsPeople'
import {TitleStyle, Container} from './components/Styles'
import axios from 'axios'

import './App.css';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const App = () => {
  const [names, setNames] = useState([])
  // const [index ,setIndex] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      // return res = response.data.results
      // console.log('dataObj', response.data.results ) 
      // res.map(names => {return <div>{names}</div>})
      setNames(response.data.results)
      // {res.map((names) => {return {names}})}
      // console.log('checkHere', res[0].name )
      
    })
     .catch(error => {
       console.log("Server API not functioning", error)
     }) 

    
  },[])
console.log('OutsideNames', names)
// console.log('OutsideIndex', index)
  return (
    <Container>
      <TitleStyle>React Wars</TitleStyle>
      
      <StarWarsPeople info={names}/>
    </Container>

  );
}

export default App;
