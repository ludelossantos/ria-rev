//import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import Header from './componentes/base/Header';
//import LibroCard from './componentes/listarLibros/LibroCard';
import Home from './paginas/Home';
import InfoLibro from './paginas/InfoLibro';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="libro" element={<InfoLibro />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


