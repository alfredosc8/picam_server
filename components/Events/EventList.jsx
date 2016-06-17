var React = require('react');
var Event = require('./Event');
var EventPager = require('./EventPager')

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

        if (eventNodes.length === 0) {
            eventNodes = <div className="row no-events text-center">No Events</div>
        }
        return (
            <div className="commentList">
                <EventPager />
                {eventNodes}
            </div>
        );
    }
});

module.exports = EventList;