import React from 'react';

class RepeatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lenguajes: ['Javascript', 'JSX', 'Typescript', 'NodeJS']
        }
    }
    render() {
        return (
            <ul>
                {this.state.lenguajes.map(item => <li>{item}</li>)}
            </ul>
        );
    }
}

export default RepeatComponent;