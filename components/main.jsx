import React from 'react'
var ReactDOM = require('react-dom');
var Banner = require('./Banner');
var Menu = require('./Menu');
var EventBox = require('./Events/EventBox');

ReactDOM.render(
    <div className="container">
        <div className="row">
            <Banner count="5" />
        </div>
        <div className="row">
            <div className="col-md-2">
                <Menu />
            </div>
            <div className="col-md-10">
                <EventBox url="/api/events" pollInterval={2000} />
            </div>
        </div>
    </div>,
    document.getElementById('content')
);