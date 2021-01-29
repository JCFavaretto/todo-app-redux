const AGREGAR = "AGREGAR";

export const agregarTarea = (x) => ({
    type: AGREGAR,
    data: {
        id: Math.random(),
        valor: x

    }
})