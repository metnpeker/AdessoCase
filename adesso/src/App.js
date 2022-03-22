import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import Units from "./components/Units/Units";
import UnitsDetails from "./components/Units/UnitsDetails"
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/units" element = {<Units />} /> 
        <Route path= "/unitsdetails/:id" element = {<UnitsDetails />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
