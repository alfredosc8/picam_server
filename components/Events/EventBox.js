var React = require('react');
var EventList = require('./EventList');

var EventBox = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        pollInterval: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {data: []};
    },
    loadEventsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
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
        setInterval(this.loadEventsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="eventBox">
                <EventList data={this.state.data} onEventDelete={this.handleEventDelete} />
            </div>
        )
    }
});

module.exports = EventBox;
