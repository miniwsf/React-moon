import React, { Component } from 'react';
import tree from './images/tree.png';
import './css/tree.css';

class Tree extends Component {
  render() {
    return (
      <div className="tree">
        <img src={tree} className="tree-img"/>
      </div>
    );
  }
}

export default Tree;
