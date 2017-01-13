import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    handleInput(term) {
        this.setState( {term} );
        this.props.handleNewTerm(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.handleInput(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;
