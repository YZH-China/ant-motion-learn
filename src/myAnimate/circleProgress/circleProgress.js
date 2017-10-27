import React, { Component } from 'react';
import TweenOne, { SvgDrawPlugin } from 'rc-tween-one';

import './circleProgress.css';

class circleProgress extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'circleProgress';
        this.state = {
            time: 2, //持续时间
            style: {
                left: {
                    animation: ''
                },
                right: {
                    animation: ''
                }
            },
            dasharray: '0, 10000',
            circle: {
                cx: 55,
                cy: 55,
                r: 50,
                strokeWidth: 5,
                length: 0,
                val: 0,
                step: 0
            },
            timer: null,
            animationRight: {},
            animationLeft: {},
            animationWrapper: null,
            moment: null
        };
    }

    clickStart = () => {
        this.setState({
            style: {
                left: {
                    animation: 'circleProgressLoad_left ' + this.state.time + 's linear infinite'
                },
                right: {
                    animation: 'circleProgressLoad_right ' + this.state.time + 's linear infinite'
                }
            }
        })
    }

    startSvg = () => {
        this.state.circle.length = Math.floor(2 * Math.PI * this.state.circle.r);
        this.forceUpdate();
        this.setState({
            timer: setInterval(this.resetDasharray, 50)
        });
    }

    resetDasharray = () => {
        let val = this.state.circle.val;
        if(val >= 100) {
            clearInterval(this.state.timer);
        } else {
            let curLength = this.state.circle.length * val / 100;
            this.setState({
                dasharray: curLength + ', 10000'
            }, () => {
                this.state.circle.val++;
                this.forceUpdate();
            });
        }
    }

    startTweenOne = () => {
        this.setState({
            animationRight: {
                rotate: 45,
                repeat: 0,
                duration: this.state.time * 1000,
                ease: 'linear'
            }
        });
    }

    tweenOnChange = (obj) => {
        if(obj.mode === 'onComplete') {
            this.setState({
                animationLeft: {
                    rotate: 45,
                    repeat: 0,
                    duration: this.state.time * 1000,
                    ease: 'linear'
                }
            });
        }
    }

    tweenLeftonChange = (obj) => {
        if(obj.mode === 'onComplete') {
            this.state.animationWrapper = [
                { scale: 1.3, duration: 500 },
                { scale: 0, duration: 200 }
            ];
            this.forceUpdate();
        }
    }

    tweenWrapperChange = (obj) => {
        if(obj.mode === 'onComplete' && obj.index === 1) {
            setTimeout(() => {
                obj.target.remove();
                // this.setState({ //若不将moment充值，则保持在结束状态
                //     moment: 0
                // });
            }, 0)
        } else {
            this.setState({
                moment: null
            })
        }
    }

    render() {
        const { circle } = this.state;
        return (
            <div className="exampleContent">
                <p>html + csss实现：</p>
                <div className="buttons">
                    <button onClick={this.clickStart}>开始</button>
                </div>
                <div className="circleprogress_wrapper">
                    <div className="wrapper left">
                        <div className="circleProgress leftcircle"
                            style={this.state.style.left}
                        ></div>
                    </div>
                    <div className="wrapper right">
                        <div className="circleProgress rightcircle"
                            style={this.state.style.right}
                        ></div>
                    </div>
                </div>
                <p>svg + js</p>
                <div>
                    <button onClick={this.startSvg}>开始</button>
                </div>
                <div style={{ marginBottom: 30 }}>
                    <svg xmlns="http://www.w3.rog/200/svg" width="150" height="110">
                        <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill="none" stroke="gray" strokeWidth={circle.strokeWidth} strokeLinecap="round" />
                        <circle className="dome2" id="J_progress_bar" cx={circle.cx} cy={circle.cy} r={circle.r} fill="none" stroke="red" strokeWidth={circle.strokeWidth} strokeLinecap="round"
                            strokeDasharray={this.state.dasharray}
                        />
                    </svg>
                </div>
                <p>html + css + js(rc-tween-one)</p>
                <div>
                    <button onClick={this.startTweenOne}>开始</button>
                </div>
                <TweenOne className="circleprogress_wrapper"
                    animation = {this.state.animationWrapper}
                    moment = {this.state.moment}
                    onChange = {this.tweenWrapperChange}
                    style={{ transform: 'scale(1)' }}
                >
                    <div className="wrapper left">
                        <TweenOne className="tweenoneProgress tweencircleleft"
                            animation = {this.state.animationLeft}
                            onChange = {this.tweenLeftonChange}
                        />
                    </div>
                    <div className="wrapper right">
                        <TweenOne className="tweenoneProgress tweencircleright"
                            animation = {this.state.animationRight}
                            onChange = {this.tweenOnChange}
                        />
                    </div>
                </TweenOne>
            </div>
        );
    }
}

export default circleProgress;