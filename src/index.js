import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/Page/App';
import * as serviceWorker from './serviceWorker';
import Slideshow from './components/carousel/Slider';
import Converter from './components/Curency_converter/converter2';





ReactDOM.render(<App />, document.getElementById('weather'));
ReactDOM.render(<Slideshow />, document.getElementById('slider'));
ReactDOM.render(<Converter />, document.getElementById('curency_converter'));



/* ReactDOM.render(<App />, document.getElementById('root'));   */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
