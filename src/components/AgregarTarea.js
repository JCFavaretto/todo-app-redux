import React from "react";
import { useDispatch } from "react-redux";
import { agregarTarea } from "../actions/todo";

function AgregarTarea() {
  const dispatch = useDispatch();

  function guardar(ev) {
    ev.preventDefault();
    dispatch(agregarTarea(ev.target.tarea.value));
  }

  return (
    <form
      style={{ display: "flex", justifyContent: "center" }}
      onSubmit={(ev) => {
        guardar(ev);
      }}
    >
      <input type="text" name="tarea" />
      <button>Guardar</button>
    </form>
  );
}

export default AgregarTarea;
