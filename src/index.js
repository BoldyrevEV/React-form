import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import rootReducer from './store/Reducers/rootReduсer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);
const app = (
    <Provider store={ store }>
        <App />
    </Provider> 
); 

ReactDOM.render(app, document.getElementById('root'));
