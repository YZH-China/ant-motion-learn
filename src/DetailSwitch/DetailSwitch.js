import React, { Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

import './DetailSwitch.css';

const Element = BannerAnim.Element;

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, ' +
  'Hong Kong and Southeast Asia known as motorcycles [2], ' +
  'is a driven by the engine, ' +
  'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
  'In some military or police applications, will add a side compartment and a secondary wheel, ' +
  'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle'
};

let dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429'
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
  },
];

dataArray = dataArray.map((item) => ({...item, ...textData}));

class DetailSwitch extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: "details-switch-demo"
  }

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] }
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if(!this.oneEnter) {
      this.setState({ delay: 3000 })
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] }
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({
      showInt,
      imgAnim
    });
    this.bannerImg.prev();
    this.bannerText.prev();
  }

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opcity: [1, 0] }
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({
      showInt,
      imgAnim
    });
    this.bannerImg.next();
    this.bannerText.next();
  }

  getDuration = (e) => {
    if(e.key === 'map') {
      return 800;
    }
    return 1000;
  }

  render() {
    const imgChildren = dataArray.map((item, i) => {
      return (
        <Element key={i} style={{ background: item.color }}>
          <QueueAnim
            key="img-wrapper"
            duration={this.getDuration}
            delay={[!i ? this.state.delay : 300, 0]}
            ease={['easeOutCubic', 'easeInQuad']}
          >
            <div className={`${this.props.className}-map map${i}`} key="map">
              <img src={item.map} alt="地图图片${i}" width="100%"/>
            </div>
            <div className={`${this.props.className}-pic pic${i}`} key="pic">
              <img src={item.pic} alt="实物图片${i}" width="100%"/>  
            </div>
          </QueueAnim>
        </Element>
      )
    });
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (
        <Element key={i}>
          <QueueAnim
            animConfig={this.state.imgAnim}
            type="bottom"
            duration={1000}
            delay={[ !i ? this.state.delay + 500 : 800, 0]}
          >
            <h1 key='h1'>{title}</h1>
            <em key="em" style={{ background }}></em>
            <p key="p">{content}</p>
          </QueueAnim>
        </Element>
      )
    })

    return (
      <div className={`showResult ${this.props.className}-wrapper`} style={{ background: dataArray[this.state.showInt].background }}>
        <div className={`${this.props.className}`}>
          <BannerAnim
            prefixCls={`${this.props.className}-img-wrapper`}
            sync
            type="across"
            duration={1000}
            ease="easeInOutExpo"
            arrow={false}
            thumb={false}
            onChange={this.onChange}
            ref={(c) => {this.bannerImg = c}}
          >
            {imgChildren}
          </BannerAnim>
          <BannerAnim
            prefixCls={`${this.props.className}-text-wrapper`}
            sync
            type="across"
            duration={1000}
            arrow={false}
            thumb={false}
            ease="easeInOutExpo"
            ref={(c) => {this.bannerText = c}}
            dragPlay={false}
          >
            {textChildren}
          </BannerAnim>
          <TweenOneGroup
            enter={{ opacity: 0, type: 'from' }}
            leave={{ opacity: 0 }}
          >
            { this.state.showInt && <Icon onClick={this.onLeft} type="left" key="left"/>}
            { this.state.showInt < dataArray.length - 1 && <Icon onClick={this.onRight} type="right" key="right" />}
          </TweenOneGroup>
        </div>
      </div>
    );
  }
}

export default DetailSwitch;