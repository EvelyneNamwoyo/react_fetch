import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect(
      () => {
          fetch('https://jsonplaceholder.typicode.com/posts')
              .then((response)=> {

                  return response.json()
              })
              .then((data) => {
                  setData(data)
              })
      }, [])
console.log(data[0])
  return (
    <div className="App">
         {
             data.map((items, index) => {
                return <p key={index}> {index <= 10 && items.title} </p>

        } )
         }
    </div>
  );
}

export default App;
