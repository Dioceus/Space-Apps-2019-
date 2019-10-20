import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    //Returns an array of suggestions based on user inputs
    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        } else if (value.length === 0) {
            
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    //Once the user clicks on a suggestion the input box is cleared
    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }));       
    }

    //Shows a list of suggestions underneath the input box based on user inputs
    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    //rendering 
    render() { 
        const { text } = this.state;
        return ( 
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
         )
    }
}
 
