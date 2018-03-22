import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root')
)