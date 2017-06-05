import React, { Component } from 'react';

class RouteZero extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      );
  }
}

export default RouteZero;
