import React, { Component } from 'react';
import './css/cloud.css';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

class Cloud extends Component {
    constructor(props) {
        super(props);
        this.state={paused:false};
    }

    render() {
        return (
            <div className={this.props.cloudClass}>
                <TweenOne
                    animation={this.props.animation}
                    className={this.props.cloudImgClass}
                    paused={this.state.paused}
                />
            </div>
        );
    }
}

Cloud.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default Cloud;
