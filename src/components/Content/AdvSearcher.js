import React, { Component, PropTypes } from 'react';
import { Input, Select, Col, Row } from 'antd'
const { Option } = Select

class AdvSearch extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
             <Row 
                  type="flex" 
                  justify="space-around" 
                  gutter={16}
                  align="middle" 
                  style={{textAlign: 'right', height: '130px'}}
            >
                  <Col span={3}>服务名称:</Col>
                  <Col span={5}><Input/></Col>
                  <Col span={3}>服务级别:</Col>
                  <Col span={5}>
                        <Select style={{width: '100%'}}>
                              <Option value="low">低</Option>
                              <Option value="middle">中</Option>
                              <Option value="high">高</Option>                                   
                        </Select>
                  </Col>
                  <Col span={3}>转变更:</Col>
                  <Col span={5}>
                        <Select style={{width: '100%'}}>
                              <Option value="low">低</Option>
                              <Option value="middle">中</Option>
                              <Option value="high">高</Option>                                   
                        </Select>
                  </Col>

                  <Col span={3}>ID:</Col>
                  <Col span={5}><Input/></Col>
                  <Col span={3}>状态:</Col>
                  <Col span={5}>
                        <Select style={{width: '100%'}}>
                              <Option value="useless">不可用</Option>
                              <Option value="repair">维护中</Option>
                              <Option value="useful">可用</Option>                                
                        </Select>
                  </Col>
                  <Col span={3}>提供地点:</Col>
                  <Col span={5}>
                        <Select style={{width: '100%'}}>
                              <Option value="shenzhen">深圳</Option>
                              <Option value="shanghai">上海</Option>
                              <Option value="beijing">北京</Option>                               
                        </Select>
                  </Col>

                  <Col span={3} style={{alignSelf: 'baseline'}}>描述:</Col>
                  <Col span={5}><Input type="textarea" autosize={{minRows: 2, maxRows: 4}}/></Col>
                  <Col span={3} style={{alignSelf: 'baseline'}}>服务提供组:</Col>
                  <Col span={5} style={{alignSelf: 'baseline'}}>
                        <Select style={{width: '100%'}}>
                              <Option value="group1">服务组1</Option>
                              <Option value="group2">服务组2</Option>
                              <Option value="group3">服务组3</Option>                                    
                        </Select>
                  </Col>
                  <Col span={3} style={{alignSelf: 'baseline'}}>成本:</Col>
                  <Col span={5} style={{alignSelf: 'baseline'}}><Input/></Col>
            </Row>
        );
    }
}

export default AdvSearch;
