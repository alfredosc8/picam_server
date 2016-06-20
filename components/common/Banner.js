var React = require('react');

var Banner = React.createClass({
    render: function() {
        return (
            <div className="jumbotron text-center">
                <h1>PiCamera <span className="label label-info">{this.props.count}</span></h1>
            </div>
        );
    }
});

module.exports = Banner;
