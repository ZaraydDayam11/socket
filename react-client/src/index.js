// Importa la librería React y la librería ReactDOM desde los módulos 'react' y 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
// Importa un archivo de estilo CSS desde './index.css'
import './index.css';
// Importa un componente llamado 'App' desde el archivo './App.js'
import App from './App';

// elemento react iniicalizadoa
// Inicializa un elemento React en el DOM utilizando el método 'ReactDOM.render()'
ReactDOM.render(
  // Pasa el elemento 'App' como hijo del elemento 'React.StrictMode'
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    // Identifica el elemento en el DOM donde se debe colocar el elemento React creado
  document.getElementById('root')
);

