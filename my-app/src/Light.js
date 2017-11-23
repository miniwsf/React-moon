import React, { Component } from 'react';
import './css/Light.css';

class Light extends Component {
    constructor(props) {
        super(props);
        this.path="M240.379661 500.718644c0 150.99661 122.359322 274.223729 274.223729 274.223729s274.223729-122.359322 274.223729-274.223729c0-150.99661-122.359322-274.223729-274.223729-274.223729S240.379661 348.854237 240.379661 500.718644z m60.745763 0c0-118.020339 95.457627-213.477966 213.477966-213.477966s213.477966 95.457627 213.477966 213.477966-95.457627 213.477966-213.477966 213.477966-213.477966-96.325424-213.477966-213.477966z m151.864407 426.088136c0 16.488136 13.884746 30.372881 30.372881 30.372881h60.745763c16.488136 0 30.372881-13.884746 30.372881-30.372881s-13.884746-30.372881-30.372881-30.372882h-60.745763c-16.488136 0-30.372881 13.016949-30.372881 30.372882z m-60.745763-91.986441c0 16.488136 13.884746 30.372881 30.372881 30.372881h183.105085c16.488136 0 30.372881-13.884746 30.372881-30.372881s-13.884746-30.372881-30.372881-30.372881H422.616949c-16.488136 0-30.372881 13.884746-30.372881 30.372881z";
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
                <svg width="200" height="200">
                    <path d={this.path} fill="none" stroke="rgba(1, 155, 240, 0.2)"/>
                </svg>
            </div>
        );
    }
}

Light.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default Light;
