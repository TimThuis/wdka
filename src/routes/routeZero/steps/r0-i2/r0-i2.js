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
            <img className="buttons button-next" src={ButtonJa} alt="" />
          </Link>
          <Link to="/route-0/step-3" >
            <img className="buttons" id="button-nee-thanks" src={ButtonNee} alt="" />
          </Link>
        </div>

      </div>
      );
  }
}

export default R0I2;
