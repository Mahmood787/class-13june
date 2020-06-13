import React, {useState} from 'react';
import './App.css';

function Child(prop) {
    return(
        <div>
            Child number {prop.num}
        </div>
    )
}
 
export default Child;

