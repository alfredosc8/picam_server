var React = require('react');
var Event = require('./Event');
var Infinite = require('react-infinite');

var EventList = React.createClass({
    getInitialState: function() {
        return {
            elements: [],
            page:0,
            numberOfPages:1,
            isInfiniteLoading: false
        }
    },

    buildElements: function(pageNumber) {
        let that = this;
        this.props.loadEvents(pageNumber, function(events, numberOfPages) {
            let newEvents = events.map(function(event) {
                return (
                    <Event key={event._id} _id={event._id}
                           cameraName={event.cameraName + event._id}
                           cameraLocation={event.cameraLocation}
                           date={event.date}
                           images={event.images}
                           onEventDelete={[]} />
                );
            });
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newEvents),
                page: that.state.page,
                numberOfPages: numberOfPages
            });
        });
    },

    handleInfiniteLoad: function() {
        if(this.state.page < this.state.numberOfPages) {
            var that = this;
            this.setState({
                isInfiniteLoading: true
            });
            setTimeout(function () {
                that.buildElements(++that.state.page);
            }, 1500);
        }
    },

    elementInfiniteLoad: function() {
        return <div className="row no-events text-center">Loading...</div>;
    },

    render: function() {
        return <Infinite elementHeight={350}
                         useWindowAsScrollContainer={true}
                         infiniteLoadBeginEdgeOffset={100}
                         preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         timeScrollStateLastsForAfterUserScrolls={1000}>
            {this.state.elements}
        </Infinite>;
    }
});

module.exports = EventList;