import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
var ReactDOM = require('react-dom');
var Banner = require('./Banner');
var Menu = require('./Menu');
var EventBox = require('./Events/EventBox');

const MenuPanel = React.createClass({
    render() {
        return (
            <div className="col-md-2">
                <Menu />
            </div>
        )
    }
});

const EventsPanel = React.createClass({
    render() {
        return (
            <div className="col-md-10">
                <EventBox url="/api/events" pollInterval={2000} />
            </div>
        )
    }
});

const EventsPage = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Banner count="5" />
                </div>
                <div className="row">
                    <MenuPanel />
                    <EventsPanel />
                </div>
            </div>
        )
    }
});

const EventDetailPage = React.createClass({
    render() {
        return (
            <div className="container">
                Coming Soon...
            </div>
        )
    }
});

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={EventsPage}/>
        <Route path="/event/:eventId" component={EventDetailPage}/>
        <Route path="*" component={EventsPage}/>
    </Router>
), document.getElementById('content'));