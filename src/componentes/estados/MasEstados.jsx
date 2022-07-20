import React from "react";

class MasEstados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            cadena: "micadena"
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>Date: {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={()=> this.setState({
                    date: new Date()
                })}>Cambia fecha</button>
                <h2>Cadena: {this.state.cadena}</h2>
                <button onClick={()=> this.setState({
                    cadena: this.state.cadena + 1
                })}>Cambia Cadena</button>
            </div>
        );
    }
}

export default MasEstados;