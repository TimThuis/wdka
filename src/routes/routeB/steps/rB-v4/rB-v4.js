import React, { Component } from 'react';
import { Link } from 'react-router';

import Video from './video.mp4';
import ButtonNext from './button.png';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV4 extends Component {
  render() {
    return (
      <div className="container">
        <StepComp video={Video}>
          <Link to="/route-0/step-5" >
            <img className="buttons center-v" src={ButtonNext} alt=""/>
          </Link>
        </StepComp>
      </div>
      );
  }
}

export default RBV4;
