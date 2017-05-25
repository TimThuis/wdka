import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../../../../images/1.png';


class RBI1 extends Component {
  render() {
    return (
      <div>
        <h3>Route B image 1</h3>
        <img src={Image} alt=""/>
        <Link to="/route-b/step-5" >cancel</Link>
        <Link to="/route-a/step-5" >post</Link>
        <p>tweede instagram post</p>
      </div>
      );
  }
}

export default RBI1;
