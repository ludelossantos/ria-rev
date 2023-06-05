//import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import Header from './componentes/base/Header';
//import LibroCard from './componentes/listarLibros/LibroCard';
import Home from './paginas/Home';


const App = () => {

  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
};

export default App;


