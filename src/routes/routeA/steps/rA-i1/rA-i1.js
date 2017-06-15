import React, { Component } from 'react';
import { Link } from 'react-router';

import Background from './background.png';
import ButtonNee from './button-nee.png';
import ButtonJa from './button-ja.png';
import Audio from '../../../../components/audio/Audio';

class RAI1 extends Component {
  render() {
    return (
      <div className="container">
          <img src={Background} alt="" className="background"/>
          <div className="container-buttons-image">
            <Link to="/route-a/step-5" >
              <img className="buttons animation" style={{
        top: "35%",
        height: "8%",
        left: "23%",
      }}src={ButtonJa} alt="" />
            </Link>
            <Link to="/route-a/step-5" >
              <img className="buttons animation" style={{
        top: "35%",
        height: "8%",
        right: "23%",
      }}
      src={ButtonNee} alt="" />
            </Link>
          </div>
          <Audio />
      </div>
      );
  }
}

export default RAI1;
