import React, { Component } from 'react';
import Moon from './Moon';
import Cloud from './Cloud';
import Tree from './Tree';
import cloudImg from './images/cloud.png';
import cloud_1 from './images/cloud_1.png';
import cloud_2 from './images/cloud_2.png';
import Wish from "./Wish";

class Sky extends Component {
  render() {
    return (
      <div className="content">
        <Moon/>
        <Cloud cloud={cloudImg} cloudClass="cloud_1"/>
        <Cloud cloud={cloud_1} cloudClass="cloud_2"/>
        <Cloud cloud={cloud_2} cloudClass="cloud_3"/>
        <Cloud cloud={cloud_1} cloudClass="cloud_4"/>
         <Wish/>
        <Tree/>
      </div>
    );
  }
}

export default Sky;
