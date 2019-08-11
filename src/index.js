import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware, } from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/root";
import {rootEpic} from './epics';
import { composeWithDevTools } from 'redux-devtools-extension';





const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(epicMiddleware))
    );
    
epicMiddleware.run(rootEpic);

const appWithProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));