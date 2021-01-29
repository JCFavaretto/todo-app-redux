const AGREGAR = "AGREGAR";
const BORRAR = "BORRAR";

export const agregarTarea = (x) => ({
  type: AGREGAR,
  data: {
    id: Math.random(),
    valor: x,
  },
});

export const borrarTarea = (id) => ({
  type: BORRAR,

  id,
});
