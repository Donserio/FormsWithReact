import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import FormPage from './FormPage';
import Register from './Register';
// import Form from '/Form';
//import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/formPage" component={FormPage} />
        <Route path="/contact" component={Register} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA