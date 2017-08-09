import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class Simple extends Component {
  constructor() {
    super(...arguments);
    this.displayName="Simple";
    this.state = {
      subDom : [
        { key: 'a', conent: '依次进场1' },
        { key: 'b', conent: '依次进场2' },
        { key: 'c', conent: '依次进场3' },
        { key: 'd', conent: '依次进场4' },
      ]
    }
  }

  render() {
    return (
      <div className="exampleContent">
        <QueueAnim
          delay={300}
          component="div"
          className="queue-simple"
          type="scaleY"
          onEnd={() => {console.log('end')}}
        >
          {
            this.state.subDom.map((item, index) => {
              return <div key={item.key}>{item.conent}</div>
            })
          }
        </QueueAnim>
      </div>
    );
  }
}

export default Simple;