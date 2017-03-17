import React, { Component, PropTypes } from 'react';
import { Card, Button } from 'antd'

class Operation extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card title="批量操作">
            		<Button onClick={this.props.action.addBtn}>添加</Button>
            		<Button onClick={this.props.action.delBtn} style={{display: 'block'}}>删除</Button>
            </Card>
        );
    }
}

export default Operation;
