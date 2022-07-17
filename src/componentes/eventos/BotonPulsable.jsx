import React, { useState } from "react";

class BotonPulsable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
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
