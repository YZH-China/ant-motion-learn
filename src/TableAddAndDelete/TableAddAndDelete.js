import React, { Component } from 'react';
import {
  Table,
  Button
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import { TweenOneGroup } from 'rc-tween-one';

import './tabelAddAndDelete.css';

class TableAddAndeDelete extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: 'table-enter-leave-demo'
  }

  constructor(props) {
    super(props);
    this.columns = [
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '年龄', dataIndex: 'age', key: 'age' },
      { title: '地址', dataIndex: 'address', key: 'address' },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: (text, record) => {
          return <span className={`${this.props.className}-delete`} onClick={e => this.onDelete(record.key, e)}>删除</span>
        }
      }
    ];
    this.data = [
      {
        key: 1,
        name: 'john Brown',
        age: 32,
        address: 'New York No.1 Lake Park'
      }, {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'Lodon No.1 Lake Park'
      }, {
        key: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sindey No.1 Lake Park',
      }, {
        key: 4,
        name: 'Jim Red',
        age: 18,
        address: 'Lodon No.1 Lake Park'
      }
    ];
    /**
     * 进入动画和退出动画同时执行的
     * react根据key来跟踪数据和dom之间的关系，
     * 以此来确定数据变化引起的DOM变化（是进入还是退出），
     * 从而触发不同的动画效果。
     */
    this.enterAnim = [
      { opacity: 0, x: 50, backgroundColor: '#fffeee', duration: 0},
      {
        height: 0,
        duration: 200,
        type: 'from', //这个动画的灵魂一步，新增了一个tr，对应新增的数据项
        dealy: 250,
        ease: 'easeOutQuad'
      },
      { opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad' },
      { delay: 1000, backgroundColor: '#fff' }
    ];
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: 'easeOutQuad' }
    ]
    this.currentPage = 1;
    this.newPage = 1;
    this.state = {
      data: this.data
    }
  }

  onAdd = () => {
    const data = this.state.data;
    const i = Math.round(Math.random() * (this.data.length - 1));
    data.unshift({
      key: Date.now(),
      name: this.data[i].name,
      age: this.data[i].age,
      address: this.data[i].address
    });
    this.setState({
      data: data
    })
  };

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({data});
  }

  /**
   * 整个功能的灵魂在于此函数
   * 每次数据发生变化一定会执行此函数，从而触发TweenOneGroup动画
   */
  getBodyWrapper = (body) => {
    console.log(1);
    //切换分页，去除动画
    if(this.currentPage !== this.newPage) {
      this.currentPage = this.newPage;
      return body;
    }
    return (
      <TweenOneGroup
        component='tbody'
        className={body.props.className}
        enter = {this.enterAnim}
        leave = {this.leaveAnim}
        appear = {false}
      >
        {body.props.children}
      </TweenOneGroup>
    )
  }

  pageChange = (pagination) => {
    this.newPage = pagination.current;
  }

  render() {
    return (
      <div className="showResult">
        <div className={`${this.props.className}-wrapper`}>
          <div className={`${this.props.className}`}>
            <div className={`${this.props.className}-header`}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={`${this.props.className}-nav`}>
              <span>
                <img height="24" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="图标1"/>
                <img height="14" src="https://zos.alipayobjects.com/rmsportal/bNfCyCcgnyTgRmz.svg" alt="图标2"/>
              </span>
            </div>
            <div className={`${this.props.className}-list`}>
              <QueueAnim type="bottom" component="ul">
                <li key="0"></li>
                <li key="1"></li>
                <li key="2"></li>
                <li key="3"></li>
                <li key="4"></li>
              </QueueAnim>
            </div>
            <div className={`${this.props.className}-table-wrapper`}>
              <div className={`${this.props.className}-action-bar`}>
                <Button type="primary" onClick={this.onAdd}>添加</Button>
              </div>
              <Table
                columns={this.columns}
                pagination={{ pageSize: 4}}
                dataSource={this.state.data}
                className={`${this.props.className}-table`}
                getBodyWrapper={this.getBodyWrapper}
                onChange={this.pageChange}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableAddAndeDelete;