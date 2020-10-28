import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { term: '' };
    inputHandler = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="form ui" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search videos</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.inputHandler}></input>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar
