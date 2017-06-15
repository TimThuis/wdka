import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { TweenMax } from "gsap";
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root'));
registerServiceWorker();
