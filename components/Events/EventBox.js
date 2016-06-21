import $ from 'jquery';
var React = require('react');
var EventList = require('./EventList');

var EventBox = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        pollInterval: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            events: [],
            date: 'Latest'
        };
    },
    getURL: function () {
        var url = this.props.url;
        if (!this.props.params === undefined) {
            if (!this.props.params.day === undefined) {
                return url += '?day=' + this.props.params.day;
            }
        }
        return url += '?day=latest';
    },
    loadEventsFromServer: function() {
        var url = this.getURL();

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    events: data.events,
                    date: data.date
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleEventDelete: function(_id) {
        $.ajax({
            url: this.props.url + '/' + _id,
            type: 'DELETE',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadEventsFromServer();
        //setInterval(this.loadEventsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="eventBox">
                <EventList events={this.state.events} date = {this.state.date} onEventDelete={this.handleEventDelete} />
            </div>
        );
    }
});

module.exports = EventBox;
