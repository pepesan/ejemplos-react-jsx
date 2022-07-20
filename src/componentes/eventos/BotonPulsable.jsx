import React from "react";

class BotonPulsable extends React.Component {
    contador;
    constructor(props) {
        super(props);
        this.contador = 0;
        if (this.props.contador != null && this.props.contador !==""){
            this.contador = parseInt(this.props.contador);
        }
        this.state = {
            count: this.contador
        };
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello(event) {
        event.preventDefault();
        console.log("pulsado");
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.sayHello}>
                    Click me!
                </button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default BotonPulsable;
