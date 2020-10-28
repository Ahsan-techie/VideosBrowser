import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Youtube from "../APIs/Youtube"

export class App extends Component {
    KEY = "AIzaSyDpDXJPgL3ZTlaBuIp8vR7lh3KpU42r7Ho"

    onTermSubmit = term => {
        Youtube.get('/search', {
            params: {
                q: term,
                key: this.KEY,
                maxResults: 5,
                type: 'video',
                part: 'snippet'
            }
        })

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App
