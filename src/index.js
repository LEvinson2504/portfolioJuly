import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MySelf from "../src/components/MySelf/MySelf"
import NavBar from "../src/components/NavBar/NavBar"
import BottomLinks from "../src/components/BottomLinks/BottomLinks"

import { Row, Col, Button } from "antd"

ReactDOM.render(
  <>
    <Row>
      <Col span={24} className="navbar-top">
        <NavBar />
      </Col>
      <Col span={24}>
        <MySelf />
      </Col>
      <Col span={24}>
      </Col>
    </Row>
    <div className="bottom-links">
      <BottomLinks />
    </div>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
