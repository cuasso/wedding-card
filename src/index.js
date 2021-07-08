import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import App from './App';

ReactDOM.render(
    < Router>
        <Route exact path='/lucho&joha'>
            <App />
        </Route>
    </Router>
    , document.getElementById('root'));