import React from 'react';

class PropiedadesV3 extends React.Component {

    lastnameSanitized;

    constructor(props) {
        super(props);
        if (this.props.lastname==="" || this.props.lastname===undefined){
            this.lastnameSanitized = "Predefinido ";
        }else{
            this.lastnameSanitized = this.props.lastname;
        }
    }

    render() {
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>{this.lastnameSanitized}</h2>
            </div>
        );
    }
}

export default PropiedadesV3;