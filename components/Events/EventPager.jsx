var React = require('react');

var EventPager = React.createClass({
    render: function() {
        return (
            <div className="row event-pager">
                <ul className="pager">
                    <li className="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li >
                        Day
                    </li>
                    <li className="next disabled">
                        <a href="#">Newer &rarr;</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = EventPager;