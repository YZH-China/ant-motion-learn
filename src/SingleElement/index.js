import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
const TweenOneGroup = TweenOne.TweenOneGroup;
const path = 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0';
const ease = TweenOne.easing.path(path);
TweenOne.plugins.push(SvgDrawPlugin);
TweenOne.plugins.push(SvgMorphPlugin);
TweenOne.plugins.push(PathPlugin);
TweenOne.plugins.push(BezierPlugin);

class SingleElement extends Component {
	constructor(props) {
		super(props);
		this.displayName="SingleMelment";
	}

	render() {
		return (
			/* 基本使用方式 */
			// <TweenOne
			// 	className="exampleContent"
			// 	/**
			// 	 * repeat: 在初次播放后，再重复的次数
			// 	 * type: 'to'正常播放，'from'反向播放'
			// 	 * repeatDelay: 每次重复时延迟
			// 	 * yoyo: 重复时执行返回到动画
			// 	 * ease: 缓动函数名
			// 	 */
			// 	animation={{ x: 100, y: 100, type: 'from', duration: 450, delay: 200, repeat: 3, yoyo: true, ease: ease }}
			// >
			// 	this is animation api
			// </TweenOne>

			// <TweenOne animation={{ SVGDraw: 0 }} />

			// <TweenOne animation={{ d: 'M0 0L100 100', attr: 'attr' }}> <div>demo</div> </TweenOne>

			// <TweenOne animation={{ path: 'M0,100 C30,60 0,20 50,50 C70,70 60,0 100,0' }}><div>demo</div></TweenOne>

			// <TweenOneGroup><div key="0">demo</div></TweenOneGroup>

			<TweenOne animation={{
				bezier: { 
					type: 'soft', 
					autoRotate: true,
					vars: [
						{ x: 150, y: 150 },
						{ x: 300, y: 0 },
						{ x: 450, y: 150 },
						{ x: 600, y: 0 },
					],
				}}}
			>
				<div>demo</div>
			</TweenOne>
		);
	}
}

export default SingleElement;