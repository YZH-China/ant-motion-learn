import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class Addandremove extends Component {
	constructor() {
		super(...arguments);
		this.displayName="Addandremove";
		this.state = {
			show: true,
			cur$: 3,
			items: [
				<li key="1">1</li>,
				<li key="2">2</li>,
				<li key="3">3</li>
			]
		}
	}

	onClick = () => {
		this.setState({
			show: !this.state.show
		})
	}

	onAdd = () => {
		let items = this.state.items;
		items.push(<li key={this.state.cur$+1}>{this.state.cur$+1}</li>)
		this.setState({
			show: true,
			items,
			cur$: this.state.cur$ + 1
		})
	}

	onRemove = () => {
		let items = this.state.items;
		items.splice(items.length - 1, 1);
		this.setState({
			show: true,
			items
		})
	}
	
	render() {
		return (
			<div className="exampleContent">
				<div className="queue-demo">
					<p className="buttons">
						<button type="primary" onClick={this.onClick}>切换</button>
						<button onClick={this.onAdd} style={{ marginLeft: 10 }}>添加</button>
						<button onClick={this.onRemove} style={{ marginLeft: 10 }}>删除</button>
					</p>
					<div className="demo-content">
						<div className="demo-thead" key="a">
							<ul>
								<li>我来组成头部</li>
							</ul>
						</div>
						<div className="demo-tbody" key="b">
							<QueueAnim
								component="ul"
								type={['right', 'left']}
								interval={[50, 50]}
								leaveReverse
								duration={[300, 300]}
							>
								{
									this.state.show ? this.state.items : null
								}
							</QueueAnim>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Addandremove;