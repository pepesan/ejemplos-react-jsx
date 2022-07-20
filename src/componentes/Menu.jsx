import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/jedi">Jedi</Link> |{" "}
                <Link to="/sith">Sith</Link> |{" "}
                <Link to="/welcome">Welcome</Link> |{" "}
                <Link to="/propiedades">Propiedades</Link> |{" "}
                <Link to="/estados">Estados</Link> |{" "}
                <Link to="/eventos">Eventos</Link> |{" "}
                <Link to="/eventoscampos">Eventos Campos</Link> |{" "}
                <Link to="/eventosfuncion">Eventos Funcion</Link> |{" "}
                <Link to="/listado">Listado</Link> |{" "}
                <Link to="/condicional">Condicional</Link> |{" "}
                <Link to="/formulario">Formulario</Link> |{" "}
                <Link to="/usoState">useState</Link> |{" "}
                <Link to="/usoEffect">useEffect</Link> |{" "}
                <Link to="/ciclovida">Ciclo de Vida</Link> |{" "}
                <Link to="/formik">Formik</Link> |{" "}
                <Link to="/useForm">useForm</Link> |{" "}
                <Link to="/rutas">Rutas</Link> |{" "}
                <Link to="/httprequest">HttpRequest</Link> |{" "}
                <Link to="/redux">Redux</Link> |{" "}
                <Link to="/context">Context</Link> |{" "}
            </nav>
        );
    }
}

export default Menu;