import React, { Component } from 'react';
import { Link } from 'react-router';

import Background from './achtergrond.jpg';
import Button from './button.png';
import Audio from '../../../../components/audio/Audio';

class R0I4 extends Component {
  render() {
    return (
      <div className="container">
        <img className="background" src={Background} alt=""/>
        <div className="container-buttons-image">
          <Link to="/" >
            <img className="buttons animation" style={{
        top: "0%",
        width: '100%',
        margin: "auto",
        bottom: '0',
        left: '0',
        right: '0',
      }} src={Button} alt="" />
          </Link>
        </div>
        <Audio />
      </div>
      );
  }
}

export default R0I4;
