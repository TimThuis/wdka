import React, { Component } from 'react';
import { Link } from 'react-router';

import Background from './background.png';
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
        bottom: "13%",
        margin: "auto",
        left: "0",
        right: "0",
      }} src={ButtonJa} alt="" />
          </Link>
          <Link to="/route-0/step-3" >
            <img className="buttons animation"src={ButtonNee} style={{
        width: "40%",
        bottom: "13%",
        right: "27px",
      }}alt="" />
          </Link>
        </div>

      </div>
      );
  }
}

export default R0I2;
