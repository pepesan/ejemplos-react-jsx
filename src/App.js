import './App.css';
import Jedi from './componentes/Jedi';
import Sith from './componentes/Sith';
import Welcome from "./componentes/propiedades/Welcome";
import Clock from "./componentes/estados/Clock";
import BotonPulsable from "./componentes/eventos/BotonPulsable";
import Listado from "./componentes/plantillas/Listado";
import Condicional from "./componentes/plantillas/Condicional";
import Form01 from "./componentes/formularios/Form01";
import UsoState from "./componentes/hooks/UsoState";
import CicloVida from "./componentes/ciclovida/CicloVida";
import UsoEffect from "./componentes/ciclovida/UsoEffect";
import FormFormik from "./componentes/formik/FormFormik";
import 'bootstrap/dist/css/bootstrap.min.css';
import EjemploUserForm from "./componentes/useForm/EjemploUseForm";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from "./componentes/Home/HomeComponent";
import Propiedades from "./componentes/propiedades/Propiedades";
import RutasListado from "./componentes/rutas/RutasListado";
import RutasDetalle from "./componentes/rutas/RutasDetalle";
import CargaDatos from "./componentes/httprequest/CargaDatos";
import {Counter} from "./componentes/redux/Counter";
import React from 'react';
import User from "./componentes/contexto/User";
import UserProvider from "./componentes/contexto/UserContext";
import Menu from "./componentes/Menu";
function App() {
  return (
    <div className="App">
        <div>
          <h1>React App</h1>
          <Menu></Menu>
        </div>
        <header className="App-header">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/jedi" element={<Jedi name="Pepe" />} />
          <Route path="/sith" element={<Sith/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/propiedades" element={<Propiedades name="Juan"/>} />
          <Route path="/estados" element={<Clock/>} />
          <Route path="/eventos" element={<BotonPulsable contador="2"/>} />
          <Route path="/listado" element={<Listado/>} />
          <Route path="/condicional" element={<Condicional numero="2"></Condicional>} />
          <Route path="/formulario" element={<Form01/>} />
          <Route path="/usoState" element={<UsoState/>} />
          <Route path="/ciclovida" element={<CicloVida/>} />
          <Route path="/usoEffect" element={<UsoEffect/>} />
          <Route path="/formik" element={<FormFormik/>} />
          <Route path="/useForm" element={<EjemploUserForm/>} />
          <Route path="/rutas" element={<RutasListado/>} />
          <Route path="/rutas/:itemId" element={<RutasDetalle />} />
          <Route path="/httprequest" element={<CargaDatos/>} />
          <Route path="/redux" element={<Counter/>} />
          <Route path="/context" element={<UserProvider value="Pepesan">
            <User/>
          </UserProvider>} />
        </Routes>

        </header>

    </div>
  );
}

export default App;
