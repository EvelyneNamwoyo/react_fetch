import React from 'react';
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
      }, []);


    const dataToPost = {
        'userId': 2,
        'id': 102,
        'title': 'Work todo',
         'body': 'Work todo Work todo'
    }

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToPost)
            })
                .then((response)=> {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                })
        }, [dataToPost])

    const size = 10;
  return (
    <div className="App">
        <h1>Items</h1>
         {
             data.slice(0, size).map((items, index) => {
                return (
                    <div key={index}>
                        <h2>{items.title}</h2>
                        <p>{items.body}</p>
                        <hr/>
                    </div>
                )
        } )
         }
    </div>
  );
}

export default App;
