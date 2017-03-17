import React, { Component, PropTypes } from 'react';
import { Icon, Tooltip } from 'antd'
import './HeaderBar.less'

class HeaderBar extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-bar">
            	  <Icon type="question-circle-o"/><span className="icon-text">帮助</span>
            	  <Icon type="user"/><span className="icon-text">用户名</span>
            	  <a style={{margin: '0 5px'}}><Icon type="setting"/></a>
            </div>
        );
    }
}

export default HeaderBar;
