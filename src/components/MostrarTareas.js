import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { borrarTarea } from "../actions/todo";

function MostrarTareas() {
  const tareas = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function borrar(id) {
    dispatch(borrarTarea(id));
  }

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tareas.length === 0 ? (
          <li>No hay tareas almacenadas</li>
        ) : (
          tareas.map((item) => {
            return (
              <li key={item.id}>
                {item.valor}
                <button onClick={() => borrar(item.id)}>Borrar</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default MostrarTareas;
