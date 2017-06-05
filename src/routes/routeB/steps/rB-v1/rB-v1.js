import React, { Component } from 'react';
import { Link } from 'react-router';

import Video from './video.mp4';
import StepComp from '../../../../components/stepComp/StepComp';
import ButtonNext from './button.png';

class RBV1 extends Component {
  render() {
    return (
      <div className="container">
        <StepComp video={Video}>
          <Link to="/route-b/step-2" >
            <img className="buttons button-next" src={ButtonNext} alt="" />
          </Link>
        </StepComp>
      </div>
      );
  }
}

export default RBV1;
