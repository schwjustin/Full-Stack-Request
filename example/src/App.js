import React from "react";
import logo from "./logo.svg";
import {Display} from "./components/Display.js";
import {Plus} from "./components/Plus.js";
import {Minus} from "./components/Minus.js";


import "./App.css";
import axios from "axios";



// cd example
// npm start

function App() {
  const [state, setState] = React.useState(0); //initialize to 0
  const handleChange = (event) => {
    setState(parseInt(event.currentTarget.value) + state);
  };

  const makeRequest = (event) => {
    console.log(event.target.value);
  };

  const newRequest = () => {
    axios.get("http://localhost:3001/").then(function(res) {
      console.log(res.data);
    });
  };

  

  return (
    <div className="App">
      <button type="button" onClick={newRequest} value="Hello World">
        Click Me!
      </button>
      <Display prop={state}/>
      <Minus prop={handleChange}/>
      <Plus prop={handleChange}/>
    </div>
  );
}

export default App;
