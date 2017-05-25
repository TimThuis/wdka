import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/2.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RAV2 extends Component {
  render() {
    return (
      <div>
        <h3>Route A video 2</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-a/step-3" >next</Link>
        </StepComp>
        <p>?</p>
      </div>
      );
  }
}

export default RAV2;
