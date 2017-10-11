
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Collapse from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" collapse","code":"/**\n *\n * @title collapse\n * @description 简单collpase\n *\n */\n\nimport React, {\n\tComponent\n} from 'react';\n\nimport Button from 'bee-button';\n\nimport Collapse from 'bee-collapse';\n\n\n\n\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: true\n\t\t}\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          点我啦\n\t\t        </Button>\n\t\t        \n\t\t        <Collapse in={this.state.open}>\n\t\t          <div>\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t          </div>\n\t\t        </Collapse>\n\n\t\t       \n\t\t    </div>\n\t\t)\n\n\t}\n}","desc":" 简单collpase"},{"example":<Demo2 />,"title":" unmountOnExit使用","code":"/**\r\n *\r\n * @title unmountOnExit使用\r\n * @description collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除\r\n */\r\n\r\nimport React, {\r\n\tComponent\r\n} from 'react';\r\n\r\nimport Button from 'bee-button';\r\n\r\nimport Collapse from 'bee-collapse';\r\n\r\n\r\n\r\n\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: false\r\n\t\t}\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          点我啦\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse in={this.state.open} unmountOnExit={true}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}","desc":" collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除"},{"example":<Demo3 />,"title":" 各种Enter事件","code":"/**\r\n *\r\n * @title 各种Enter事件\r\n * @description collapse显示内容时onEnter，onEntering，onEntered事件调用\r\n *\r\n */\r\n\r\nimport React, {\r\n\tComponent\r\n} from 'react';\r\n\r\nimport Button from 'bee-button';\r\n\r\nimport Collapse from 'bee-collapse';\r\n\r\n\r\n\r\n\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: false\r\n\t\t}\r\n\t\tthis.onEnter = this.onEnter.bind(this);\r\n\t\tthis.onEntering = this.onEntering.bind(this);\r\n\t\tthis.onEntered = this.onEntered.bind(this);\r\n\t}\r\n\tonEnter() {\r\n\t\talert(\"我将要显示\");\r\n\t}\r\n\tonEntering() {\r\n\t\talert(\"我正在显示\");\r\n\t}\r\n\tonEntered() {\r\n\t\talert(\"我已显示完成\");\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          点我啦\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse in={this.state.open} onEnter={this.onEnter} onEntering={this.onEntering} onEntered={this.onEntered}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}","desc":" collapse显示内容时onEnter，onEntering，onEntered事件调用"},{"example":<Demo4 />,"title":" 各种Exit事件","code":"/**\r\n *\r\n * @title 各种Exit事件\r\n * @description collapse隐藏内容时onExit，onExiting，onExited事件调用\r\n *\r\n */\r\n\r\nimport React, {\r\n\tComponent\r\n} from 'react';\r\n\r\nimport Button from 'bee-button';\r\n\r\nimport Collapse from 'bee-collapse';\r\n\r\n\r\n\r\n\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: true\r\n\t\t}\r\n\t\tthis.onExit = this.onExit.bind(this);\r\n\t\tthis.onExiting = this.onExiting.bind(this);\r\n\t\tthis.onExited = this.onExited.bind(this);\r\n\t}\r\n\tonExit() {\r\n\t\talert(\"我将要隐藏\");\r\n\t}\r\n\tonExiting() {\r\n\t\talert(\"我正在隐藏\");\r\n\t}\r\n\tonExited() {\r\n\t\talert(\"我已隐藏完成\");\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          点我啦\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse in={this.state.open} onExit={this.onExit} onExiting={this.onExiting} onExited={this.onExited}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}","desc":" collapse隐藏内容时onExit，onExiting，onExited事件调用"},{"example":<Demo5 />,"title":" 折叠区横向展开","code":"/**\r\n *\r\n * @title 折叠区横向展开\r\n * @description dimension为\"width\"具体使用\r\n *\r\n */\r\n\r\nimport React, {\r\n\tComponent\r\n} from 'react';\r\n\r\nimport Button from 'bee-button';\r\n\r\nimport Collapse from 'bee-collapse';\r\n\r\n\r\n\r\n\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: true\r\n\t\t}\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo5\">\r\n\t\t        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          点我啦\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse in={this.state.open} dimension=\"width\" >\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t            <br/>\r\n\t\t          </div>\r\n\r\n\t\t        </Collapse>\r\n\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}","desc":" dimension为\"width\"具体使用"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
