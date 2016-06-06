var React = require('react');
var Event = require('./Event');

var EventList = React.createClass({
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
    componentDidMount: function() {
        this.loadEventsFromServer();
        setInterval(this.loadEventsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <Event />
        );
    }
});

module.exports = EventList;