import React from 'react';
import './App.css';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Programs from "./components/Program";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Programs' element={<Programs/>}/>
      </Routes>
    </Router>
       
  </div>
   
   
  );
}

export default App;
