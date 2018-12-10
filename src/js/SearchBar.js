import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    handleInput = (event) => {
        this.setState({
            item: event.target.value
        })
    };

    submitSearch = (event) => {
        event.preventDefault();
        this.props.searchGame(this.state.item, 0)
    };

    render() {

        return (
            <div className="combinedSearchBarAndButton">

                <form
                action=""
                onSubmit={this.submitSearch}>
                <input
                placeholder="Search..."
                type="search"
                value={this.state.item}
                onChange={this.handleInput}/>
                <button className="fa fa-search"></button>
                </form>
        </div>
    )
    }
}

export default SearchBar;