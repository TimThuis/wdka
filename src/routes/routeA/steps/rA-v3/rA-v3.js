import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/3.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RAV3 extends Component {
  render() {
    return (
      <div>
        <h3>Route A video 3</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-a/step-4" >next</Link>
        </StepComp>
        <p>Sollicitatie & Route A</p>
      </div>
      );
  }
}

export default RAV3;
