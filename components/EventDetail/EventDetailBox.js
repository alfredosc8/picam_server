var React = require('react');
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
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url + '/' + id, status, err.toString());
            }.bind(this)
        });
    },
    handleEventDelete: function(_id) {
        $.ajax({
            url: this.props.url + '/' + _id,
            type: 'DELETE',
            success: function(data) {
                this.setState({data: data});
                window.location = '/';
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadEventFromServer(this.props._id);
    },
    render: function() {
        var event = this.state.data;
        return (
            <EventDetail key={event._id} _id={event._id}
                   cameraName={event.cameraName}
                   cameraLocation={event.cameraLocation}
                   date={event.date}
                   images={event.images}
                   onEventDelete={this.handleEventDelete} />
        );
    }
});

module.exports = EventDetailBox;
