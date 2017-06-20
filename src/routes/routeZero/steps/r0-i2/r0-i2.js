import React, { Component } from 'react';
import { Link } from 'react-router';
import Audio from '../../../../components/audio/Audio';

import Background from './background.jpg';
import ButtonNee from './button-nee.png';
import ButtonJa from './button-ja.png';

class R0I2 extends Component {
  render() {
    return (
      <div className="container">
        <img className="background" src={Background} alt=""/>

        <div className="container-buttons-image">
          <Link to="/route-0/step-3" >
            <img className="buttons animation" style={{
        width: "87%",
        bottom: "11%",
        margin: "auto",
        left: "0",
        right: "0",
      }} src={ButtonJa} alt="" />
          </Link>
          <Link to="/route-0/step-3" >
            <img className="buttons animation"src={ButtonNee} style={{
        width: "37%",
        bottom: "9%",
        right: "5%",
      }}alt="" />
          </Link>
        </div>

        <Audio />
      </div>
      );
  }
}

export default R0I2;
