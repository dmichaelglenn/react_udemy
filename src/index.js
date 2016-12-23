import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyA4BQKgSPoPIVTFQgMj61gjrdfkgonsAUg";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
             this.setState({ videos });
             //so above, the key and value for that object are actually both videos, so { videos: videos }, but es6 will read it like this if the k/v are the same.
        });
    }

    render() {
        return ( 
        <div>
            <SearchBar />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
