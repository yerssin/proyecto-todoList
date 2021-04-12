import React, { useState } from "react";
import TareaForm from "./componentes/TareaForm";
import Tarea from "./componentes/Tarea";
import "./App.css";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} />

      <div className="lista">
        {listaTareas.map((e, index) => (
          <Tarea key={index} tarea={e} borrar={borrar} id={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
