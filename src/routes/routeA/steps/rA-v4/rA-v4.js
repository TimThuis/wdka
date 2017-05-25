import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoLocation from '../../../../videos/4.mp4';
import StepComp from '../../../../components/stepComp/StepComp';

class RAV4 extends Component {
  render() {
    return (
      <div>
        <h3>Route A video 4</h3>
        <StepComp video={VideoLocation}>
          <Link to="/route-0/step-4" >next</Link>
        </StepComp>
        <p>Afwijzing & Zelf alcohol</p>
      </div>
      );
  }
}

export default RAV4;
