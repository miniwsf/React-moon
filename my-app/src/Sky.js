import React, { Component } from 'react';
import Moon from './Moon';
import Cloud from './Cloud';
import Tree from './Tree';
import Wish from "./Wish";

const animation_1={
    bezier: {
        type: 'soft',
        autoRotate: false,
        vars: [
            { x: 0, y: 0 },
            { x: 20, y: 0 },
            { x: 30, y: 0 },
            { x: 50, y: 0 },
            { x: 70, y: 0 }
        ],
    },
    yoyo:true,
    delay:2000,
    repeat:-1,
    duration: 50000,
    ease: 'linear'
};

const animation_2={
    bezier: {
        type: 'soft',
        autoRotate: false,
        vars: [
            { x: 0, y: 0 },
            { x: 20, y: 0 },
            { x: 30, y: 0 },
            { x: 50, y: 0 }
        ],
    },
    yoyo:true,
    delay:1000,
    repeat:-1,
    duration: 20000,
    ease: 'linear'
};


const animation_3={
    bezier: {
        type: 'soft',
        autoRotate: false,
        vars: [
            { x: 0, y: 0 },
            { x: 5, y: 0 },
            { x: 10, y: 0 },
            { x: 15, y: 0 }
        ],
    },
    yoyo:true,
    delay:5000,
    repeat:0,
    duration: 5000,
    ease: 'linear'
};


class Sky extends Component {
  render() {
    return (
      <div className="content">
        <Moon/>
        <Cloud cloudImgClass="cloud_img_1" cloudClass="cloud_1" animation={animation_1}/>
        <Cloud cloudImgClass="cloud_img_2" cloudClass="cloud_2" animation={animation_2}/>
        <Cloud cloudImgClass="cloud_img_3" cloudClass="cloud_3" animation={animation_3}/>
        <Cloud cloudImgClass="cloud_img_2" cloudClass="cloud_4" animation={animation_2}/>
         <Wish/>
        <Tree/>
      </div>
    );
  }
}

export default Sky;
