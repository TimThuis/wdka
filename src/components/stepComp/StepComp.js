import React from 'react';
import PropTypes from 'prop-types';
import './StepComp.css';
import { TweenMax } from "gsap";
import Video from '../video/Video';
let element;

class StepComp extends React.Component {

  componentDidMount() {
    element = this.refs.buttons;
  }

  animation() {
    TweenMax.to(element, 2, {
      opacity: 1,
      delay: 1
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
