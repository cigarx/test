import React, { Component, PropTypes } from 'react';
import { Input, Select } from 'antd'
import './Searcher.less'
const { Search } = Input
const { Option } = Select
class Searcher extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const selectOpt = {
        	dropdownMatchSelectWidth: false,
        	defaultValue: 'serviceName',
        }
        const { onChangeAdvSearch, isAdvSearchShow } = this.props
        return (
        <div className="content-search">
        	<Select {...selectOpt} className="search-select">
        		<Option value="serviceName">服务名称</Option>
        		<Option value="id">ID</Option>
        		<Option value="description">描述</Option>
        		<Option value="serviceGroup">服务提供组</Option>
        		<Option value="status">状态</Option>
        	</Select>
            <Search 
        		placeholder=""
        		style={{width: 200}}
        		onSearch={value => console.log(value)}
        	/>
        	<a className="adv-search" onClick={onChangeAdvSearch}>{isAdvSearchShow? '收起高级搜索': '高级搜索'}</a>
        </div>
        );
    }
}

export default Searcher;
