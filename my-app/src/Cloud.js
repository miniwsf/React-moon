import React, { Component } from 'react';
import './css/cloud.css';

class Cloud extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className={this.props.cloudClass}>
        <img src={this.props.cloud} className="cloud-img"/>
      </div>
    );
  }
}

export default Cloud;
