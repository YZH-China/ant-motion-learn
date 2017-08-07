import 'rc-scroll-anim/assets/index.css';
import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;

class PageScrollingAnimation extends Component {
	constructor() {
		super(...arguments);
		this.displayName="PageScrollingAnimation";
	}

	render() {
		return (
			<div className="exampleContent" style={{
				height: '100hv',
				overflow: 'scroll'
			}} id="box">
				<div className="pack-page page0">
					<QueueAnim className="home-title">
						<div className="page-title" key="title">
							<p>rc-scroll-anim@1.0.7</p>
						</div>
						<div className="page-description">The simple demo</div>
					</QueueAnim>
				</div>
				<ScrollOverPack
					id="page1"
					className="page1"
					replay
					// targetId="box"
				>
					<TweenOne className="tween-one" key="0"
						animation={{ opacity: 1 }}
					>
						默认进入与出场，顶部出场
					</TweenOne>
					<QueueAnim
						key="1"
						type='right'
					>
						<div className="demo" key="1"></div>
						<div className="demo" key="2" style={{ backgroundColor:"#f38ead" }}></div>
						<div className="demo" key="3"></div>
						<div className="demo" key="4"></div>
					</QueueAnim>
				</ScrollOverPack>

				<ScrollOverPack
					id="page4"
					className="page1"
					appear={false}
					style={{ backgroundColor: '#0098ce' }}
				>
					<TweenOne className="tween-one" key="0"
						animation={{ opacity: 1 }}
					>
						默认出场直接出现
					</TweenOne>
					<QueueAnim
						key="1"
						type="alpha"
					>
						<div className="demo" key="1"></div>
						<div className="demo" key="2" style={{ backgroundColor: '#f38ead' }}></div>
						<div className="demo" key="3"></div>
						<div className="demo" key="4"></div>
					</QueueAnim>
				</ScrollOverPack>
			</div>
		);
	}
}

export default PageScrollingAnimation;