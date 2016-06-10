var React = require('react');
var Event = require('./Event');

var EventList = React.createClass({
    render: function() {
        var onEventDelete = this.props.onEventDelete;
        var eventNodes = this.props.data.map(function(event) {
            return (
                <Event key={event._id} _id={event._id}
                       cameraName={event.cameraName}
                       cameraLocation={event.cameraLocation}
                       date={event.date}
                       images={event.images}
                       onEventDelete={onEventDelete} />
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