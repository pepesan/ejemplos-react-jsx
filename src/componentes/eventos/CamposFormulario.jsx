import React from "react";

class CamposFormulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objeto: null
        };
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onFocus(event){
        console.log("Focus: " + event.target.id)
    }
    onBlur(event){
        console.log("Blur: " + event.target.id)
    }
    onSubmit(event){
        event.preventDefault();
        console.log("Submit: " + event.target.id)
    }

    render() {
        return (
            <div>
                <h2>Eventos de Formulario</h2>
                <div>
                    <form id="ejemplo-form" onSubmit={this.onSubmit}>
                        <div>
                            <label htmlFor="texto">Texto</label>
                            <input
                                id="texto"
                                type="text"
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                                value=""/>
                        </div>
                        <div>
                            <label htmlFor="otro">Otro Texto</label>
                            <input
                                id="otro"
                                type="text"
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                                value=""/>
                        </div>
                        <div>
                            <input type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default CamposFormulario;
