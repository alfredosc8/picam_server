var React = require('react');
var Moment = require('moment');

var EventPager = React.createClass({
    render: function() {
        let nextClass = this.props.nextUrl ? 'next' : 'next disabled';
        let previousClass = this.props.prevUrl ? 'previous' : 'previous disabled';
        return (
            <div className="row event-pager">
                <ul className="pager">
                    <li className={previousClass}>
                        <a href={this.props.prevUrl}>&larr; Older</a>
                    </li>
                    <li >
                        {Moment(this.props.date).format('dddd, MMMM Do')}
                    </li>
                    <li className={nextClass}>
                        <a href={this.props.nextUrl}>Newer &rarr;</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = EventPager;
