import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../../../../images/1.png';

class R0I1 extends Component {
  render() {
    return (
      <div>
        <h3>Route 0 image 1</h3>
          <img src={Image} alt=""/>
          <div className="container-buttons-image">
            <Link to="/route-0/step-2" >next</Link>
          </div>
          <p>Titelpagina</p>
      </div>
      );
  }
}

export default R0I1;
