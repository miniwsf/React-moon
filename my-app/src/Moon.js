import React, { Component } from 'react';
import moon from './images/moon.png';
import sheep from './images/sheep.png';
import './css/moon.css';

class Moon extends Component {
  render() {
    return (
      <div className="moon">
        <img src={moon} className="moon-img"/>
         <div className="sheep">
              <img src={sheep} className="sheep-img"/>
          </div>
      </div>
    );
  }
}

export default Moon;
