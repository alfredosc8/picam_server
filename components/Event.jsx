var React = require('react');

var Event = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="message-item">
                    <div className="message-inner">
                        <div className="message-head clearfix">
                            <div className="message-icon pull-left"><a href="#"><i className="glyphicon glyphicon-check"></i></a></div>
                            <button type="button" className="btn btn-danger pull-right">Delete</button>
                            <div className="user-detail">
                                <h5 className="handle"> <span>date here</span></h5>
                                <div className="post-type">
                                    <p>camera 1 - house</p>
                                </div>
                                <div className="post-time">
                                    <p><i className="glyphicon glyphicon-time"></i> <span am-time-ago="event.date"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="qa-message-content">
                            <div className="row">
                                <div className="col-sm-4"><img ng-src="#" alt="" class="img-responsive preview-image"/></div>
                                <div className="col-sm-4"><img ng-src="#" alt="" class="img-responsive preview-image"/></div>
                                <div className="col-sm-4"><img ng-src="#" alt="" class="img-responsive preview-image"/></div>
                            </div>
                            <div className="row text-center"><a href="#">View 7 more...</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Event;