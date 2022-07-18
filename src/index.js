import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Main } from './components/main/main';
import thunk from "redux-thunk";
import {rootReducer} from './redux/rootReducer'

const store = createStore (rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
    <Provider store={store}>
        <Main />
    </Provider>, 
    document.getElementById("root")
);
