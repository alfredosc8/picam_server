var React = require('react');

var Menu = React.createClass({
    render: function() {
        return (
            <div>
                <div className="row">
                    <h3>Cameras</h3>
                    <ul>
                        <li><a href="/"><i className="glyphicon glyphicon-camera"/>All</a></li>
                        <li><i className="glyphicon glyphicon-camera"/>PiCamera 1</li>
                    </ul>
                </div>
                <div className="row">
                    <h3>Locations</h3>
                    <ul>
                        <li><i className="glyphicon glyphicon-map-marker"/>All</li>
                        <li><i className="glyphicon glyphicon-map-marker"/>Front Door</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Menu;
