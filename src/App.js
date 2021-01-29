import "./App.css";
import AgregarTarea from "./components/AgregarTarea";
import MostrarTareas from "./components/MostrarTareas";

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <AgregarTarea />
      <MostrarTareas />
    </div>
  );
}

export default App;
