import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

/* 准备动画内容 */
const children = [
	<div key="1">依次进入1</div>,
	<div key="2">依次进入2</div>,
	<div key="3">依次进入3</div>,
	<div key="4">依次进入4</div>,
]

class EnterAnimation extends Component {
	constructor(props) {
		super(props);
		this.displayName="EnterAnimation";
		this.state = {
			children
		}
	}

	onClick = () => {
		if(this.state.children) {
			this.setState({ children: null })
		} else {
			this.setState({ children })
		}
	}

	render() {
		/**
		 * type:string/array,def:right。动画内置参数alpha,left,right,top,bottom,scale,scaleBig,scaleX,scaleY
		 * animConfig:object/array,def:null。配置动画参数，用于自定出场入场
		 * delay:number/array,def:0。动画总延迟ms数
		 * duration:number/array,def:450。每个动画的执行时间
		 * interval:number/array,def:100。每个动画的间隔时间
		 * leaveReverse:boolean,def:false。出场时是否倒放
		 * ease:缓动函数
		 * appear:boolean,def:true。开始进入时是否有动画
		 * animationClassName:array,def:[queue-anim-entering, queue-anim-leaving]，进出场动画进行中类名，可修改此处以自定义
		 * compoennt:string,def:div。QueueAnim替换的标签名
		 * onEnd:func,def:null。执行完毕的回调函数cb({key, type})，type为enter或leave
		 */
		return (
			<div className="exampleContent">
				<button
					onClick={this.onClick}
				>切换</button>
				<QueueAnim
					// animConfig={[
					// 	[{ x: [300, 20], opacity: [1, 0] }, { y: [100, 0] }],
					// 	[{ x: [300, 500] }, { y: [100, -50], opacity: [1, 0] }],
					// ]}
					type="alpha"
					ease="easeInOutQuart"
					delay={300}
					leaveReverse={true}
				>
					{this.state.children}
				</QueueAnim>
			</div>
		);
	}
}

export default EnterAnimation;