import logo from './logo.svg';
import './App.css';
import Jedi from './componentes/Jedi';
import Sith from './componentes/Sith';
import Welcome from "./componentes/propiedades/Welcome";
import Clock from "./componentes/estados/Clock";
import BotonPulsable from "./componentes/eventos/BotonPulsable";
import Listado from "./componentes/plantillas/Listado";
import Condicional from "./componentes/plantillas/Condicional";
import Form01 from "./componentes/formularios/Form01";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Jedi name="Pepe"></Jedi>
        <Sith></Sith>
        <Welcome name="Pepe"></Welcome>
        <Clock></Clock>
        <BotonPulsable></BotonPulsable>
        <Listado></Listado>
        <Condicional numero="2"></Condicional>
        <Form01></Form01>
      </header>
    </div>
  );
}

export default App;
