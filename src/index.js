import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import {Route} from "react-router-dom";

import App from "./containers/App";
import reducers from "./reducers";

import createHistory from "history/createBrowserHistory";


const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composed = composeEnhancers(applyMiddleware(...[thunk]), ...[]);
const store = createStore(reducers, composed, applyMiddleware(middleware));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"));
