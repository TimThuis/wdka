import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/3.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV3 extends Component {
  render() {
    return (
      <div>
        <StepComp video={VideoLocation}>
          <Link to="/route-b/step-4" >next</Link>
        </StepComp>
      </div>
      );
  }
}

export default RBV3;
