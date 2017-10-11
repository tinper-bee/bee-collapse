/**
 *
 * @title unmountOnExit使用
 * @description collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除
 */

import React, {
	Component
} from 'react';

import Button from 'bee-button';

import Collapse from '../../src';



export default class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	render() {
		return (
			<div>
		        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
		          点我啦
		        </Button>
		        
		        <Collapse in={this.state.open} unmountOnExit={true}>
		          <div>
		            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
		          </div>
		        </Collapse>

		       
		    </div>
		)

	}
}