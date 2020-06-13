import React, {useState} from 'react';
import './App.css';
import Parents from './Parents';



function App() {
  let [number, setNumber] = useState(45);
  return (
    <div className="App">
       <Parents num={number}></Parents>
       <button onClick={()=> setNumber(++number)}>Update Number</button>
    </div>
  );
}


export default App;

