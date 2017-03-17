import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'
import { Input, Col, Row, Button, DatePicker, Select } from 'antd'
import './SearchBar.less'

const InputGroup = Input.Group
const Option = Select.Option
class SearchBar extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
        	currentText: '展开搜索',
        	isExpand: false,
        }
    /* 	 [
        	'onExpandedSearch'
        	
        ].forEach((item) => {
        	this[item] = this[item].bind(this)
        })*/
    }
    onExpandedSearch = () => {
    	const { isExpand } = this.state
    	const currentText = isExpand ? '展开搜索' : '收起搜索'
    	this.setState({
    		isExpand: !isExpand,
    		currentText
    	})
    }
    render() {
    	/*const inputOptions = [
		{placeholder: '应用名'},
		{placeholder: '描述'},
		{placeholder: '定价'},
		{placeholder: '状态'},
		{placeholder: '状态更新时间'}
	]*/
	const { currentText, isExpand } = this.state 
	const extraSrhItemsClass = classnames({
		'items-hide': !isExpand,
		'items-show': isExpand,
	})
        return (
            <Row  type="flex" align="middle" justify="center"/*compact={true}*/>
    		<Col span={20}>
    		<Row 
                style={{marginBottom: '12', marginTop: '12'}} 
                gutter={8}
                type="flex" align="middle"
            >
                   <Col span='2' style={{textAlign: 'right'}}>应用名: </Col>                  
    			<Col span='4'><Input placeholder='应用名' /></Col>
                   <Col span='2' style={{textAlign: 'right'}}>定价: </Col>                  
                   <Col span='4'><Input placeholder='定价' /></Col>
                   <Col span='2' style={{textAlign: 'right'}}>状态: </Col>                  
                   <Col span='4'><Input placeholder='状态' /></Col>
                   <Col span='2' style={{textAlign: 'right'}}>状态更新时间: </Col>                  
                   <Col span='4'><Input placeholder='状态更新时间' /></Col>
    		</Row>
    		<Row  
                  style={{marginBottom: '12'}} 
                  gutter={8} 
                  type="flex" align="middle"
             >
                   
    			
    		</Row>
    		<div className={extraSrhItemsClass}>
	    		<Row  
                        style={{marginBottom: '12'}} 
                        gutter={8} 
                        type="flex" align="middle"
                        /*className={extraSrhItemsClass} */
                    >
                         <Col span='2' style={{textAlign: 'right'}}>最后更新时间: </Col>                  
                         <Col span='5'><Input placeholder='最后更新时间' /></Col>
                         <Col span='2' style={{textAlign: 'right'}}>版本: </Col>                  
                         <Col span='5'><Input placeholder='版本' /></Col>
                         <Col span='2' style={{textAlign: 'right'}}>部署环境: </Col>                  
                         <Col span='5'><Input placeholder='部署环境' /></Col>
	    			{/*<Col span="6"><Input placeholder="最后更新时间"/></Col>
	    			<Col span="6"><Input placeholder="版本"/></Col>
	    			<Col span="6"><Input placeholder="部署环境"/></Col>*/}
	    		</Row>
    		</div>
    		<div className={extraSrhItemsClass}>
    			<div className='list-intrd'>列表tab实例</div>
	    		<Row 
                        style={{marginBottom: '12'}} 
                        gutter={8} 
                        type="flex" align="middle"
                        /*className={extraSrhItemsClass} */
                   >
                         <Col span='2' style={{textAlign: 'right'}}>代码: </Col>                  
                         <Col span='5'><Input placeholder='代码' /></Col>
                         <Col span='2' style={{textAlign: 'right'}}>名称: </Col>                  
                         <Col span='5'><Input placeholder='名称' /></Col>
                         <Col span='2' style={{textAlign: 'right'}}>类型: </Col>                  
                         <Col span='5'><Input placeholder='类型' /></Col>
	    			{/*<Col span="6"><Input placeholder="代码"/></Col>
	    			<Col span="6"><Input placeholder="名称"/></Col>
	    			<Col span="6"><Input placeholder="类型"/></Col>*/}
	    		</Row>
	    		<Row 
                        style={{marginBottom: '12'}} 
                        gutter={8}
                        type="flex" align="middle"
                         /*className={extraSrhItemsClass} */
                    >
                         <Col span='2' style={{textAlign: 'right'}}>创建时间: </Col>                  
                         <Col span='5'><Input placeholder='创建时间' /></Col>
                         <Col span='2' style={{textAlign: 'right'}}>创建者: </Col>                  
                         <Col span='5'><Input placeholder='创建者' /></Col>
	    		</Row>
    		</div>
    		<Row type="flex" justify="end">
    			<Col span={12} /*push={18}*/offset={12}>
                         <Button onClick={this.props.extraAction.addBtn} style={{marginRight: 10}}>添加</Button>
                         <Button onClick={this.props.extraAction.delBtn} style={{marginRight: 10}}>删除</Button>                         
    				<Button type='primary' style={{marginRight: 10}}>搜索</Button>
    				<Button style={{marginRight: 10}}>清空</Button>
    				<a onClick={this.onExpandedSearch}>{currentText}</a>
    			</Col>
    		</Row>
        </Col>
    	</Row>
        );
    }
}

export default SearchBar;
