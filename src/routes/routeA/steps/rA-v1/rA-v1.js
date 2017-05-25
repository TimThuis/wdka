import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/1.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RAV1 extends Component {
  render() {
    return (
      <div>
        <h3>Route A video 1</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-a/step-2" >next</Link>
        </StepComp>
        <p>Foto post & Route A</p>
      </div>
      );
  }
}

export default RAV1;
