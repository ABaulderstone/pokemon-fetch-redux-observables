import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/root";
import {rootEpic} from './epics';


const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

const appWithProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));