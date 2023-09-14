import './App.css';
import React from 'react';
import Calc from './components/Calc';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
function App()
{   return( 
<>
    <Routes> 
       <Route path="/" element={<> <Header/> <Home/></>}/>
       <Route path="/calc" element={<> <Header/> <Calc/></>}/>
    </Routes>
    
</>  
);
}

export default App; 