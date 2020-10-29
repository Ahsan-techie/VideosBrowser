import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Youtube from "../APIs/Youtube"
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


export class App extends Component {
    state = { videos: [],selectedVideo:null }
    KEY = "AIzaSyDpDXJPgL3ZTlaBuIp8vR7lh3KpU42r7Ho"
    onVideoSelect = video =>{
        this.setState({selectedVideo:video})
    }

    onTermSubmit = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q: term,
                key: this.KEY,
                maxResults: 5,
                type: 'video',
                part: 'snippet'
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/></div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}></VideoList></div>
                </div>
                </div>
            </div>
        )
    }
}

export default App
