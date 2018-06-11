import React, { Component }  from "react";
import ReactDOM from "react-dom";
import Button from 'antd/lib/button';

import 'antd/dist/antd.css';

import './App.css';
import "./styles.css";



function App() {
  return (
    <div className="App">
      <h2>Our first button</h2>
      <Button type="primary">Send</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
