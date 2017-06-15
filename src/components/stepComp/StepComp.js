import React from 'react';
import PropTypes from 'prop-types';
import './StepComp.css';
import { TweenMax } from "gsap";
import Video from '../video/Video';

class StepComp extends React.Component {

  animation() {
    TweenMax.to(".buttons", 2, {
      opacity: 1,
      transform: 'scale(1)',
    })
  }


  render() {
    return (
      <div>
        <Video location={this.props.video} startAnimation={this.animation}/>
        <div ref="buttons" className="container-buttons-video">
          {this.props.children}
        </div>
      </div>
      );
  }
}

export default StepComp;

StepComp.propTypes = {
  video: PropTypes.string.isRequired,

};
