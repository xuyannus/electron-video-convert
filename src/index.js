import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import VideoSelectScreen from "./screens/VideoSelectScreen";
import ConvertScreen from "./screens/ConvertScreen";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route exact path="/convert" component={ConvertScreen} />
        <Route exact path="/" component={VideoSelectScreen} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
