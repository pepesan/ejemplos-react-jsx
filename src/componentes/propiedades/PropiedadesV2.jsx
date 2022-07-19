import React from 'react';

class PropiedadesV2 extends React.Component {

    render() {
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>{this.props.lastname}</h2>
            </div>
        );
    }
}

export default PropiedadesV2;