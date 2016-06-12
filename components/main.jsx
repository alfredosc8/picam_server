import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
var ReactDOM = require('react-dom');
var EventsPage = require('./EventsPage');
var EventDetailPage = require('./EventDetailPage');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={EventsPage}/>
        <Route path="event/:eventId" component={EventDetailPage}/>
        <Route path="*" component={EventsPage}/>
    </Router>
), document.getElementById('content'));