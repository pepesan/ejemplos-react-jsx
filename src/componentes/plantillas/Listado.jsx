import React from 'react';

class RepeatComponent extends React.Component {
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
                <ul>
                    {this.state.datos.map((item) =>
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </li>
                    )}
                </ul>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Contenido</th>
                        <th>Operaciones</th>
                    </tr>
                    {this.state.datos.map((item) =>
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td><a href={`/rutas/${item.id}`}>Show</a> </td>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default RepeatComponent;