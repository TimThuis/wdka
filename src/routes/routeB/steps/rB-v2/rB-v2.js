import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/2.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV2 extends Component {
  render() {
    return (
      <div>
        <h3>Route B video 2</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-b/step-3" >next</Link>
        </StepComp>
        <p>ontvangen mail Sollicitatie</p>
      </div>
      );
  }
}

export default RBV2;
