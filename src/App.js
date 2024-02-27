import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);


  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  }

  useEffect(() => {
    fetchAge();
  }, []);


  return (
    <div className='main-container'>
      <h1>Prediction of Your Age</h1>
      <div className='container'>
        <input placeholder='your name' type='text' onChange={(e) => {
          setName(e.target.value);
        }} />
        <button onClick={fetchAge}>get your age</button>
        <h3>Your Name: {predictedAge?.name} </h3>
        <h5>Your Age: {predictedAge?.age} </h5>
        <p>Your Age Count: {predictedAge?.count} </p>
      </div>
    </div>

    //predictedAge er initial value "null" tai "?" lagiye trpor "." use kre name age count etc k fetch krte hbe.
  );
}

export default App;
