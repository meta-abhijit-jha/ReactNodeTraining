import React from 'react';
import './TextArea.css';
class TextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleInput = this.handleInput.bind(this);
    }

    
    
    handleInput(e) {
        var countChar = e.target.value
        this.setState({
            count : countChar.length
        });
    }

    render() {
        return (
            <div className="inputFields">
                <div className="verticalBorder"></div>
                <div id="fields">
                    <div><label>{this.props.heading}</label></div>
                    <div><input className="inputField" type="text" onKeyUp={this.handleInput} /></div>
                    <div><span type="text">{this.state.count}</span></div>
                </div>
            </div>
        );
    }
}

export default TextArea;