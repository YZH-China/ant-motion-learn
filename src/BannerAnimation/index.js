import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

class BannerAnimation extends Component {
	constructor() {
		super(...arguments);
		this.displayName="BannerAnimation";
	}

	render() {
		return (
			<BannerAnim className="exampleContent">
				<Element key="demo1"
					type="vertical"
					followParallax={{
						delay: 500,
						data: [{
							id: 'tween1',
							value: 5,
							type: ['x', 'y'],
						}],
						minMove: .5
					}}
				>
					<TweenOne id="tween1" animation={{
						x: -30,
						type: 'from'
					}}>Ant Motion Demo1</TweenOne>
				</Element>
				<Element key="demo2">
					<TweenOne animation={{
						x: -30,
						type: 'from'
					}}>Ant Motion Demo2</TweenOne>
				</Element>
			</BannerAnim>
		);
	}
}

export default BannerAnimation;