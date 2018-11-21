import React, { Component } from 'react'
import GameInfo from "./GameInfo";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    };

    render() {
        return (
            <form>
            <input
        placeholder="Search for any game"
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
            <button>Search</button>
        </form>
    )
    }
}

export default SearchBar;