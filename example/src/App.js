import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
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
    </div>
  );
}

export default App;
