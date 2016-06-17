var React = require('react');
var Event = require('./Event');
var EventList = require('./EventList');

var EventBox = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        pollInterval: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {data: []};
    },
    loadEventsFromServer: function(pageNumber, callback) {
        $.ajax({
            url: this.props.url + "?page=" + pageNumber,
            dataType: 'json',
            cache: false,
            success: function(data) {
                console.log(data.docs);
                callback(data.docs, data.pages);
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

    render: function() {
        return (
            <div className="eventBox">
                <EventList data={this.state.data} loadEvents={this.loadEventsFromServer} onEventDelete={this.handleEventDelete} />
            </div>
        )
    }
});

module.exports = EventBox;