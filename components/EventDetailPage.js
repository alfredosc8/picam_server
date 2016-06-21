var React = require('react');
var Banner = require('./Common/Banner');
var Menu = require('./Common/Menu');
var EventDetailBox = require('./EventDetail/EventDetailBox');

const MenuPanel = React.createClass({
    render() {
        return (
            <div className="col-md-2">
                <Menu />
            </div>
        );
    }
});

const EventDetailPanel = React.createClass({
    render() {
        return (
            <div className="col-md-10">
                <EventDetailBox url="/api/events" _id={this.props.params.eventId} />
            </div>
        );
    }
});

const EventDetailPage = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Banner count="5" />
                </div>
                <div className="row">
                    <MenuPanel />
                    <EventDetailPanel params={this.props.params} />
                </div>
            </div>
        );
    }
});

module.exports = EventDetailPage;
