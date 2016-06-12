var React = require('react');
var Banner = require('./common/Banner');
var Menu = require('./common/Menu');
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

module.exports = EventsPage;