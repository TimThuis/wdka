import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/4.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RBV4 extends Component {
  render() {
    return (
      <div>
        <h3>Route B video 4</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-0/step-4" >next</Link>
        </StepComp>
        <p>afijwzing getagd met alcohol</p>
      </div>
      );
  }
}

export default RBV4;
