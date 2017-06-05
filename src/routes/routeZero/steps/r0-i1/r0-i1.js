import React, { Component } from 'react';
import { Link } from 'react-router';

import Background from './background.png';
import ButtonNext from './button.png';

class R0I1 extends Component {
  render() {
    return (
      <div className="container">
          <img className="background" src={Background} alt=""/>
          <div className="container-buttons-image">
            <Link to="/route-0/step-2" >
              <img className="buttons button-next" src={ButtonNext} alt="" />
            </Link>
          </div>
      </div>
      );
  }
}

export default R0I1;
