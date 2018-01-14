import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);