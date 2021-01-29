const dataInicial = [];

const todo = (state = dataInicial, action) => {
  switch (action.type) {
    case "AGREGAR": {
      return [...state, action.data];
    }

    default: {
      return state;
    }
  }
};

export default todo;
