import React from 'react';
import {Link} from "react-router-dom";

class RutasListado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [
                {
                    id: 1,
                    title: 'Primer mensaje',
                    content: 'Este es el contenido del primer mensaje'
                },
                {
                    id: 2,
                    title: 'Segundo mensaje',
                    content: 'Otro mensaje para listarlo con React'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <h2><Link to={`/rutas/add`}>Add</Link>
                </h2>
                <ul>
                    {this.state.datos.map((item) =>
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p><Link to={`/rutas/${item.id}`}>Ver</Link></p>
                        </li>
                    )}
                </ul>
            </div>

        );
    }
}

export default RutasListado;