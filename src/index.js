import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyA4BQKgSPoPIVTFQgMj61gjrdfkgonsAUg";
// create a component which produces some html


const App = () => {
    return ( 
    <div>
        <SearchBar />
    </div>
    );
}


//take generated HTML and put into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
