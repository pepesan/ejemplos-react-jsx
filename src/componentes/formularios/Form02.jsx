import React from "react";

class Form02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    });
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.isGoing);
        console.log(this.state.numberOfGuests);

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Is going:
                    <input
                        name="isGoing"            type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"            type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        );
    }
}

export default Form02;