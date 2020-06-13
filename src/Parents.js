import React from 'react';
import './App.css';
import Child from './Child'



function Parents(props) {
  return (
    <div className="App">
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parents;

