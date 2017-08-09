import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);

class SvgMorph extends Component {
	constructor() {
		super(...arguments);
		this.dispalyName="SvgMorph";
		this.animation = {
			d: 'M60,10 L60,90 L140,90 L140,10Z',
			yoyo: true,
			repeat: -1,
			duration: 1000,
		};
		this.state = {
			tweenData: '100%',
		}
	}

	render() {
		return (
			<div className="exampleContent" style={{
				textAlign: 'center',
				margin: 40,
			}}>
				<svg width="200" height="200" version="1.2">
					<TweenOne
						animation={this.animation}
						style={{ fill: '019BF0' }}
						component='path'
						d="M60,50 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0Z"
						attr="attr"
					></TweenOne>
				</svg>
			</div>
		);
	}
}

export default SvgMorph;