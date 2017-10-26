import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App";
import Edit from "./containers/Edit";
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
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={App}/>
                        <Route path="/todos/:id" component={Edit}/>
                    </div>
                </Router>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"));
