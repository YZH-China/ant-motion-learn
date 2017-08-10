import '../../../index.css';
import React, { Component } from 'react';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

class MyOverPack extends Component {
  constructor() {
    super(...arguments);
    this.displayName="MyOverPack";
  }

  render() {
    return (
      <div className="exampleContent" style={{
        height: 1000,
        padding: '500px 0 0 0'
      }}>
        <OverPack
          style={{ overflow: 'hidden', height: 200 }}
        >
          <TweenOne key="0"
            animation={{ opacity: 1 }}
            className="demo-box"
            style={{
              opacity: 0,
              marginBotton: 10
            }}
          ></TweenOne>
          <QueueAnim
            key="queue"
            style={{
              float: 'left',
              position: 'relative',
              left: '50%',
              marginLeft: -165 
            }}
          >
            <div key="1" className="demo-box queue-anim-demo"></div>
            <div key="2" className="demo-box queue-anim-demo"></div>
            <div key="3" className="demo-box queue-anim-demo"></div>
            <div key="4" className="demo-box queue-anim-demo"></div>
            <div key="5" className="demo-box queue-anim-demo"></div>
            <div key="6" className="demo-box queue-anim-demo"></div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default MyOverPack;