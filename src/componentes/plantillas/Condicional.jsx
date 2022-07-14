import React from 'react';

class Condicional extends React.Component {
    render() {
        if(this.props.numero % 2 == 0) {
            return (
                <div>
                    <h1>Numero: {this.props.numero}</h1>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Condicional;