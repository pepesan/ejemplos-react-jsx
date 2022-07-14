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
                {this.state.datos.map((item) =>
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </article>
                )}
            </div>
        );
    }
}

export default RepeatComponent;