var React = require('react');
var Moment = require('moment');

var EventDetail = React.createClass({
    propTypes: {
        onEventDelete: React.PropTypes.func.isRequired,
        _id: React.PropTypes.string.isRequired,
        video: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        cameraName: React.PropTypes.string.isRequired,
        cameraLocation: React.PropTypes.string.isRequired
    },
    handleDelete: function() {
        this.props.onEventDelete(this.props._id);
    },
    render: function() {
        return (
            <div className="row">
                <div className="message-item">
                    <div className="message-inner">
                        <div className="message-head clearfix">
                            <div className="message-icon pull-left"><a href={ '/event/' + this.props._id }><i className="glyphicon glyphicon-check"></i></a></div>
                            <button onClick={this.handleDelete} className="btn btn-danger pull-right">Delete</button>
                            <div className="user-detail">
                                <h5 className="handle">
                                    <span>{Moment(this.props.date).format('LLL')}
                                    </span>
                                </h5>
                                <div className="post-type">
                                    <p>{this.props.cameraName} - {this.props.cameraLocation}</p>
                                </div>
                                <div className="post-time">
                                    <p><i className="glyphicon glyphicon-time"></i>
                                        <span>
                                            {Moment(this.props.date).fromNow()}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="qa-message-content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div>
                                        <video width="100%" controls>
                                        <source src={ '/uploads/' + this.props.video } type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EventDetail;
