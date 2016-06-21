var React = require('react');
var Banner = require('./Common/Banner');
var Menu = require('./Common/Menu');
var EventBox = require('./Events/EventBox');

const MenuPanel = React.createClass({
    render() {
        return (
            <div className="col-md-2">
                <Menu />
            </div>
        );
    }
});

const EventsPanel = React.createClass({
    render() {
        return (
            <div className="col-md-10">
                <EventBox apiUrl="/api/events" pollInterval={2000} location={this.props.location} />
            </div>
        );
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
                    <EventsPanel location={this.props.location} />
                </div>
            </div>
        );
    }
});

module.exports = EventsPage;
