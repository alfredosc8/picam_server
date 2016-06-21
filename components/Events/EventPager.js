var React = require('react');
var Moment = require('moment');

var EventPager = React.createClass({
    render: function() {
        let nextClass = this.props.nextCallback ? 'next' : 'next disabled';
        let previousClass = this.props.previousCallback ? 'previous' : 'previous disabled';
        let date = this.props.date ? this.props.date : 'Latest';
        return (
            <div className="row event-pager">
                <ul className="pager">
                    <li className={previousClass}>
                        <a href="#">&larr; Older</a>
                    </li>
                    <li >
                        {Moment(this.props.date).format('dddd, MMMM Do')}
                    </li>
                    <li className={nextClass}>
                        <a href="#">Newer &rarr;</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = EventPager;
