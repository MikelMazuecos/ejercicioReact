import React from 'react';
import './App.css';
import Cabecera from './cabecera'
import Cuerpo from './cuerpo'

function App() {
const titulo = "Ejercicio React"
const nombres = ["Mikel","Jose","Juan","Antonio"]

  return (
    <div className="App">
      <Cabecera titulo={titulo}></Cabecera>
      <Cuerpo nombres={nombres} titulo={titulo}></Cuerpo>
    </div>
  );
}

export default App;
