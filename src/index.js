import React from 'react';
import ReactDOM from 'react-dom';

// create a component which produces some html

const API_KEY = "AIzaSyA4BQKgSPoPIVTFQgMj61gjrdfkgonsAUg";
const App = () => {
    return <div>Hey There</div>
}


//take generated HTML and put into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
