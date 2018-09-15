import React from 'react';
import ReactDOM from 'react-dom';

// create a new component and this component should produce some html.
const App = function() {
    return <div>NEW REACT APP</div>;
}

// take this component generated html and show it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));