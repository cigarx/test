/**
 * Created by zhanglei on 2017/3/16.
 */
import React, { Component, PropTypes } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

class UserSearch extends Component {
    state = {
        expand: false,
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    render() {
        const userName = [
            {name:'张三',id:'a1',placeholder:'请输入名称'},
            {name:'李四',id:'a2',placeholder:'请输入UM'},
            {name:'王五',id:'a2',placeholder:'请输入部门'},
            {name:'朱刘',id:'a2',placeholder:'请输入公司'},
            {name:'李四',id:'a2',placeholder:'请输入角色'}
        ];
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 40 },
            wrapperCol: { span: 19 },
        };

        // To generate mock Form.Item
        const children = [];
        for (let i = 0; i < 5; i++) {
            children.push(
                <Col span={8} key={i}>
                    <FormItem {...formItemLayout} label={`${userName[i].name}`}>
                        {getFieldDecorator(`field-${i}`)(
                            <Input placeholder={userName[i].placeholder} />
                        )}
                    </FormItem>
                </Col>
            );
        }

        const expand = this.state.expand;
        const shownCount = expand ? children.length : 6;
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
                >
                <Row gutter={40}>
                    {children.slice(0, shownCount)}
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}
const WrappedAdvancedSearchForm = Form.create()(UserSearch);
export default WrappedAdvancedSearchForm;