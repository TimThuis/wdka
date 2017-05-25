import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/1.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV1 extends Component {
  render() {
    return (
      <div>
        <h3>Route B video 1</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-b/step-2" >next</Link>
        </StepComp>
        <p>foto post & route b</p>
      </div>
      );
  }
}

export default RBV1;
