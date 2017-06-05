import React, { Component } from 'react';
import { Link } from 'react-router';

import Video from './video.mp4';
import ButtonNext from './button.png';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV2 extends Component {
  render() {
    return (
      <div className="container">
        <StepComp video={Video}>
          <Link to="/route-b/step-4" >
            <img className="buttons button-next" src={ButtonNext} alt="" />
          </Link>
        </StepComp>
      </div>
      );
  }
}

export default RBV2;
