import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(busqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={busqueda} onChange={handleChange} placeholder="Buscar por título" />
      <button type="submit">Buscar</button>
    </form>
  );
};

Buscador.propTypes = {
    onBuscar: PropTypes.func.isRequired
};

export default Buscador;