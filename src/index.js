import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './components/video_list'; // eslint-disable-line no-unused-vars
import SearchBar from './components/search_bar'; // eslint-disable-line no-unused-vars
import VideoDetail from './components/video_detail'; // eslint-disable-line no-unused-vars


const API_KEY = 'AIzaSyBgrBBfHZ0LjTxu5ywwD2YHl-i3goyQhJM';

class App extends Component { // eslint-disable-line no-unused-vars
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Spain');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);
        return (
            <div>
                <SearchBar handleNewTerm={videoSearch}/>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        handleVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
