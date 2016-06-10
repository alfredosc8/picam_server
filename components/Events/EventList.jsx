var React = require('react');
var Event = require('./Event');

var EventList = React.createClass({
    render: function() {
        var eventNodes = this.props.data.map(function(event) {
            return (
                <Event cameraName={event.cameraName} cameraLocation={event.cameraLocation} date={event.date} />
            );
        });
        return (
            <div className="commentList">
                {eventNodes}
            </div>
        );
    }
});

module.exports = EventList;