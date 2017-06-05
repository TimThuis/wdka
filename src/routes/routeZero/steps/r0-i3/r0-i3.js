import React, { Component } from 'react';
import { Link } from 'react-router';

import Background from './achtergrond.png';
import Button from './button.png';
import Audio from '../../../../components/audio/Audio';

class R0I3 extends Component {
  render() {
    return (
      <div className="container">
        <img className="background" src={Background} alt=""/>
        <div className="container-buttons-image">
          <Link to="/route-0/step-6" >
            <img className="buttons button-next" src={Button} alt="" />
          </Link>
        </div>
        <Audio />
      </div>
      );
  }
}

export default R0I3;
