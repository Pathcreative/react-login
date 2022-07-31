import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Login from './Login'
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}> </Route>
        <Route exact path="/login" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
