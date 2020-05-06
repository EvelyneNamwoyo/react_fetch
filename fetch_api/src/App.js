import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({})

  useEffect(
      () => {
          fetch('https://jsonplaceholder.typicode.com/posts/4')
              .then((response)=> {
                  return response.json()
              })
              .then((data) => {
                  setData(data)
              })
      }
      )
    console.log(data)
  return (
    <div className="App">

    </div>
  );
}

export default App;
