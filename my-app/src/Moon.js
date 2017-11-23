import React, { Component } from 'react';
import './css/moon.css';

import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

class Moon extends Component {
    constructor(props) {
        super(props);
        this.animation = {
            bezier: {
                type: 'soft',
                autoRotate: false,
                vars: [
                    { x: 0, y: 0 },
                    { x: 20, y: 10 },
                    { x: 30, y: 15 }
                ],
            },
            yoyo:true,
            repeat:-1,
            duration: 2000,
            ease: 'linear'
        };
        this.state={paused:false};
    }

    render() {
        return (
            <div className="moon">
                <TweenOne
                    animation={this.animation}
                    style={{ margin: 0}}
                    className="moon-box"
                    paused={this.state.paused}
                />
            </div>
        );
    }
}

Moon.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default Moon;
