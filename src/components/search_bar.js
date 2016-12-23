import React, { Component } from 'react';

//class based components are used when state needs to be tracked; functional components when we're just spitting out jsx 
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}


export default SearchBar;