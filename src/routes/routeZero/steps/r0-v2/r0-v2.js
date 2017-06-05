import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/2.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class R0V2 extends Component {
  render() {
    return (
      <div className="container">
        <StepComp video={VideoLocation}>
          <Link to="/route-0/step-5" >next</Link>
        </StepComp>
      </div>
      );
  }
}

export default R0V2;
