import React, { Component } from 'react';
import { Link } from 'react-router';

import Video from './video.mp4';
import ButtonOptie2 from './button-optie2.png';
import ButtonOptie1 from './button-optie1.png';
import StepComp from '../../../../components/stepComp/StepComp';

class R0V1 extends Component {

  render() {
    return (
      <div className="container">
        <StepComp video={Video}>
          <Link to="/route-a/step-1" >
            <img className="buttons opties top" src={ButtonOptie1} alt="" />
          </Link>
          <Link to="/route-b/step-1" >
            <img className="buttons opties bottom" src={ButtonOptie2} alt="" />
          </Link>
        </StepComp>
      </div>
      );
  }
}

export default R0V1;
