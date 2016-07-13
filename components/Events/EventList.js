var React = require('react');
var Event = require('./Event');
var EventPager = require('./EventPager');

var EventList = React.createClass({
    propTypes: {
        onEventDelete: React.PropTypes.func,
        _id: React.PropTypes.number,
        events: React.PropTypes.array,
        nextUrl: React.PropTypes.string,
        prevUrl: React.PropTypes.string,
        date: React.PropTypes.string
    },
    render: function() {
        var onEventDelete = this.props.onEventDelete;
        var eventNodes = this.props.events.map(function(event) {
            return (
                <Event key={event._id} _id={event._id}
                       cameraName={event.cameraName}
                       cameraLocation={event.cameraLocation}
                       date={event.date}
                       previewImage={event.previewImage}
                       onEventDelete={onEventDelete} />
            );
        });

        if (eventNodes.length === 0) {
            eventNodes = <div className="row no-events text-center">No Events</div>;
        }
        return (
            <div className="commentList">
                <EventPager date={this.props.date}
                            nextUrl={this.props.nextUrl}
                            prevUrl={this.props.prevUrl}
                />
                {eventNodes}
            </div>
        );
    }
});

module.exports = EventList;
