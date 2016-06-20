var React = require('react');

var EventPager = React.createClass({
    render: function() {
        let nextClass = this.props.nextCallback ? "next" : "next disabled";
        let previousClass = this.props.previousCallback ? "previous" : "previous disabled";
        let title = this.props.title ? this.props.title : "Latest";
        return (
            <div className="row event-pager">
                <ul className="pager">
                    <li className={previousClass}>
                        <a href="#">&larr; Older</a>
                    </li>
                    <li >
                        {title}
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