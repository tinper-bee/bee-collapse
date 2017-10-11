import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';


const defaultProps = { in : false
}


class Collapse extends React.Component {
	constructor(props) {
		super(props);
		this.state = { in : false
		}
		this.hide = this.hide.bind(this);
		this.show = this.show.bind(this);
	}

	hide() {

		// this.setState({
		// 	"collapse": true,
		// 	"in": false,
		// 	"collapsing": false
		// });
	}
	show() {

		// this.setState({
		// 	"collapse": false,
		// 	"in": true,
		// 	"collapsing": true
		// });
		let domEle = this.refs.targetDiv;

		let scrollHeight = domEle.scrollHeight;

	}

	render() {

		let classes = { in : this.props.in,
			collapse: true
		}


		debugger;

		// if (this.props.in) {
		// 	this.show();
		// } else {
		// 	this.hide();
		// }

		// let classNameStr = classNames({
		// 	"collapsing": this.state.collapsing,
		// 	"in": this.state.in,
		// 	"collapse": this.state.collapse
		// })


		let classNameStr = classNames(classes);

		return (
			<div ref="targetDiv"   className={classNameStr} >
				{this.props.children}
			</div>

		);

	}

}

Collapse.defaultProps = defaultProps;

export default Collapse;