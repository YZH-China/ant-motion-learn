import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';

class CustomParallax extends Component {
	constructor() {
		super(...arguments);
		this.displayName="CustomParallax";
	}

	render() {
		return (
			<div className="exampleContent" style={{
				height: 1000,
				padding: '500px 0 0 0'
			}}>
				<Parallax
					//这里playScale表示滚动条50%时开始播放，80%时结束
					animation={{ x: 100, opacity: 1, playScale:[.5, .8] }}
					style={{
						opacity: 0,
						width: 50,
						height: 50,
						backgroundColor: 'blue',
						borderRadius: 5,
					}}
				></Parallax>
			</div>
		);
	}
}

export default CustomParallax;