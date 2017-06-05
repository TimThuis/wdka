import React, { Component } from 'react';
import { Link } from 'react-router';
import Audio from '../../../../components/audio/Audio';

import Background from './background.png';
import ButtonNee from './button-nee.png';
import ButtonJa from './button-ja.png';


class RBI1 extends Component {
  render() {
    return (
      <div className="container">
        <img src={Background} alt="" className="background"/>
        <div className="container-buttons-image">
          <Link to="/route-b/step-5" >
            <img className="buttons button-next" src={ButtonJa} alt="" />
          </Link>
          <Link to="/route-a/step-5" >
            <img className="buttons split" src={ButtonNee} alt="" />
          </Link>
        </div>
        <Audio />
      </div>
      );
  }
}

export default RBI1;
