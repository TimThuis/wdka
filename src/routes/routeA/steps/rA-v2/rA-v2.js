import React, { Component } from 'react';
import { Link } from 'react-router';

import Video from './video.mp4';
import ButtonNext from './button.png';
import StepComp from '../../../../components/stepComp/StepComp';

class RAV2 extends Component {
  render() {
    return (
      <div className="container">
        <StepComp video={Video}>
          <Link to="/route-a/step-4" >
              <img className="buttons" style={{
        top: "17%",
        width: "100%"
      }} src={ButtonNext} alt="" />
          </Link>
        </StepComp>
      </div>
      );
  }
}

export default RAV2;
