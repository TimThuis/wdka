import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/1.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class R0V1 extends Component {

  render() {
    return (
      <div>
        <h3>Route 0 video 3</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-a/step-1" >Route A</Link>
          <Link to="/route-b/step-1" >Route B</Link>
        </StepComp>
        <p>Recap avond</p>
      </div>
      );
  }
}

export default R0V1;
