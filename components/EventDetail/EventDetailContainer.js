var React = require('react');
var Moment = require('moment');
var EventDetail = require('./EventDetail');
import $ from 'jquery';

var EventDetailBox = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        _id: React.PropTypes.string.isRequired
    },
    loadEventFromServer: function(id) {
        $.ajax({
            url: this.props.url + '/' + id,
            dataType: 'json',
            cache: false,
            success: function(event) {
                if (event) {
                    this.setState({event: event});
                } else {
                    window.location = '/';
                }
            }.bind(this)
        });
    },
    handleEventDelete: function() {
        $.ajax({
            url: this.props.url + '/' + this.state.event._id,
            type: 'DELETE',
            success: function() {
                window.location = '/?day=' + Moment(this.state.event.date).format('YYYY-MM-DD').toString();
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {event: []};
    },
    componentDidMount: function() {
        this.loadEventFromServer(this.props._id);
    },
    render: function() {
        return (
            <EventDetail key={this.state.event._id} _id={this.state.event._id}
                   cameraName={this.state.event.cameraName}
                   cameraLocation={this.state.event.cameraLocation}
                   date={this.state.event.date}
                   images={this.state.event.images}
                   onEventDelete={this.handleEventDelete} />
        );
    }
});

module.exports = EventDetailBox;
