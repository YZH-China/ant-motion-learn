import './index.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'rc-animate';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.displayName = 'Todo';
	}

	static propTypes = {
		children: PropTypes.any,
		end: PropTypes.func,
		onClick: PropTypes.func
	}

	static defaultProps = {
		visible: true,
		end() {},
	}

	componentWillUnmount() {
		console.log('component will unmount');
		console.log(this.props.children);
		this.props.end();
	}

	render() {
		const props = this.props;
		const style = {
			display: props.visible ? 'block' : 'none',
			width: 100,
			border: '1px solid red',
			padding: 10,
			margin: 10,
		};
		return (
			<div
				onClick={this.props.onClick}
				style={style}
			>
				{props.children}
			</div>
		)
	}
}

class CssStyle extends Component {
	constructor(props) {
		super(props);
		this.displayName="CssStyle";
		this.state = {
			items: [
				{ content: 'hello', visible: true },
				{ content: 'world', visible: true },
				{ content: 'click', visible: true },
				{ content: 'me', visible: true },
			]
		}
	}

	handleHide = (i, item) => {
		const newItems = this.state.items.concat([]); //在内存中新分配存储空间
		newItems.forEach((n, index) => {
			newItems[index] = Object.assign({}, n, {
				visible: true
			})
		});
		newItems[i] = Object.assign({}, item, {
			visible: false
		});
		this.setState({
			items: newItems
		})
	}

	render() {
		/**
		 * showProp:string,def:null。子集动画的类型，显示或隐藏
		 * exclusive:boolean,def:false。同时出发动画是，是否只允许播放一个动画
		 * transitionName:string,def:null。css样式的名称
		 * transitionAppear:boolean,def:false。师傅支持开始出现的动画
		 * transitionLeave:boolean,def:true。是否支持进场动画，出场后的进场
		 * onEnd:function,def:true。动画结束后的回调cb(key:String, exists:boolean)
		 * animation:Object,def:{}。使用第三方动画类来执行
		 * component:React.Element/String，def:span。需要替换的元素
		 */
		const items = this.state.items.map((item, i) => {
			return (
				<Todo
					key={item.content}
					visible={item.visible}
					onClick={() => this.handleHide(i, item)}
				>
					{item.content}
				</Todo>
			)
		});
		return (
			<div className="exampleContent">
				<h2>Hide Todo</h2>
				<Animate
					showProp="visible"
					transitionName="fade"
				>
					{items}
				</Animate>
			</div>
		);
	}
}

export default CssStyle;