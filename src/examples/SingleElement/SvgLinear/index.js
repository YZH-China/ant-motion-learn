import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
//加载插件
TweenOne.plugins.push(SvgDrawPlugin);

//定义外部数据
const dataStartArr = ['30 150', '50% 50%', '30% 200', '20 30%', 0, '100%'];
let i = 0;

class SvgLinear extends Component {
	constructor() {
		super(...arguments);
		this.displayName="SvgLinear";
		this.state = {
			tweenData: '100%',
		}
	}

	onClick() {
		const tweenData =  dataStartArr[i];
		this.setState({
			tweenData: tweenData
		});
		i++;
		i = i >= dataStartArr.length ? 0 : i;
	}
	
	render() {
		return (
			<div className="exampleContent" style={{ textAlign:'center', marginTop:40 }}>
				<button type="primary" onClick={this.onClick.bind(this)}>点击切换</button>
				<svg width="200" height="84" version="1.2"
					style={{ display: 'block', margin: 'auto' }}
				>
					<TweenOne
						animation={{ SVGDraw: this.state.tweenData, duration: 1000}}
						style={{ fill: 'none', strokeWidth: '10', stroke: '109BF0' }}
						component='path'
						d="M10,10C65,50 115,50 180,10"
					></TweenOne>
				</svg>
				<p>当前参数{this.state.tweenData}</p>
			</div>
		);
	}
}

export default SvgLinear;