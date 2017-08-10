import 'rc-banner-anim/assets/index.css';
import './index.css';
import React, { Component } from 'react';
import BannerAnim, { Element, Arrow, Thumb } from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
const BgElement = Element.BgElement;

class SimpleBanner extends Component {
	constructor() {
		super(...arguments);
		this.displayName="SimpleBanner";
		this.imgArray = [
			'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
			'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg'
		];
		this.state = {
			intShow: 0,
			prevEnter: false,
			nextEnter: false,
			thumbEnter: false
		};
		[
			'onChange',
			'prevEnter',
			'prevLeave',
			'nextEnter',
			'nextLeave',
			'onMouseEnter',
			'onMouseLeave'
		].forEach((method) => { this[method] = this[method].bind(this) })
	}

	onChange(type, int) {
		if(type === 'before') {
			this.setState({
				intShow: int
			})
		}
	}

	getNextPrevNumber() {
		let nextInt = this.state.intShow + 1;
		let prevInt = this.state.intShow - 1;
		if(nextInt >= this.imgArray.length){
			nextInt = 0;
		}
		if(prevInt < 0) {
			prevInt = this.imgArray.length - 1;
		}
		return [prevInt, nextInt];
	}

	onMouseEnter() {
		this.setState({
			thumbEnter: true
		})
	}

	prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

	onMouseLeave() {
		this.setState({
			thumbEnter: false
		})
	}

	render() {
		const intArray = this.getNextPrevNumber();
		const thumbChildren = this.imgArray.map((img, i) => (
			<span key={i}>
				<i style={{
					backgroundImage: `url(${img})`
				}}></i>
			</span>
		))

		return (
			<div className="exampleContent">
				<BannerAnim
					prefixCls="custom-arrow-thumb"
					onChange={this.onChange}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}

					//自动播放
					// autoPlay
					// autoPlaySpeed={3000}

					dragPlay={false}
				>
					<Element
						prefixCls="banner-user-elem"
						key="aaa"
						followParallax={{
							delay: 1000,
							data: [
								{ id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
								{ id: 'title', value: 50, type: 'x' },
								{ id: 'content', value: -30, type: 'x' }
							]
						}}
					>
						<BgElement key="bg" className="bg" id="bg"
							style={{
								backgroundImage: `url(${this.imgArray[0]})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								width: '100%',
								height: '100%',
								position: 'absolute',
								top: 0,
								left: 0,
								overflow: 'hidden'
							}}
						/>
						<TweenOne className="banner-user-title" id="title"
							animation={{ y: 30, opacity: 0, type: 'from' }}
							style={{
								fontSize: 30,
								color:'white',
								textAlign: 'center',
								top: '40%'
							}}
						>
							Ant Motion Banner
						</TweenOne>
						<TweenOne className="banner-user-text" id="content"
							animation={{ y:30, opacity: 0, type: 'from', delay: 100 }}
							style={{
								fontSize: 12,
								color: 'white',
								textAlign: 'center',
								top: '40%'
							}}
						>
							The Fast Way Use Animation In React
						</TweenOne>
					</Element>
					<Element key="bbb"
						prefixCls="banner-user-elem"
					>
						<BgElement key="bg" className="bg"
							style={{ 
								backgroundImage: `url(${this.imgArray[1]})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								width: '100%',
								height: '100%',
								position: 'absolute',
								top: 0,
								left: 0,
								overflow: 'hidden'
							}}
						></BgElement>
						<TweenOne className="banner-user-title"
							animation={{ y: 30, opacity: 0, type: 'from' }}
							style={{
								fontSize: 30,
								color:'white',
								textAlign: 'center',
								top: '40%'
							}}
						>
							Ant Motion Banner
						</TweenOne>
						<TweenOne className="banner-user-text"
							animation={{ y: 30, opacity: 0, type: 'from', delay: 100}}
							style={{
								fontSize: 12,
								color: 'white',
								textAlign: 'center',
								top: '40%'
							}}
						>
							The Fast Way Use Animation In React
						</TweenOne>
					</Element>
					<Arrow
						arrowType="prev"
						key="prev"
						prefixCls="user-arrow"
						component={TweenOne}
						onMouseEnter={this.prevEnter}
						onMouseLeave={this.prevLeave}
						animation={{ left: this.state.prevEnter ? 0 : -120}}
					>
						<div className="arrow"></div>
						<TweenOneGroup
							enter={{ opacity: 0, type: 'from' }}
							leave={{ opacity: 0 }}
							appear={false}
							className="img-wrapper"
							component="ul"
						>
							<li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }} key={intArray[0]}></li>
						</TweenOneGroup>
					</Arrow>
					<Arrow
						arrowType="next"
						key="next"
						prefixCls="user-arrow"
						component={TweenOne}
						onMouseEnter={this.nextEnter}
						onMouseLeave={this.nextLeave}
						animation={{ right: this.state.nextEnter ? 0 : -120}}
					>
						<div className="arrow"></div>
						<TweenOneGroup
							enter={{ opacity: 0, type: 'from' }}
							leave={{ opacity: 0 }}
							appear={false}
							className="img-wrapper"
							component="ul"
						>
							<li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})` }} key={intArray[1]}></li>
						</TweenOneGroup>
					</Arrow>
					<Thumb
						prefixCls="user-thumb"
						key="thumb"
						component={TweenOne}
						animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
					>
						{ thumbChildren }
					</Thumb>
				</BannerAnim>
			</div>
		);
	}
}

export default SimpleBanner;