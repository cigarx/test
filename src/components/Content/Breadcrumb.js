import React, { Component, PropTypes } from 'react';
import { Breadcrumb } from 'antd'

class ContentBreadcrumb extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default ContentBreadcrumb;
