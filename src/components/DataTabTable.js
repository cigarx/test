import React, { Component, PropTypes } from 'react';
import { Table } from 'antd'

class DataTabTable extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        const data = []
	  for( let i = 0; i < 3; i++){
	  	data.push({
	  		key: `Test${i}`,
	  		code: `cd${i}`,
	  		name: '客户类型',
	  		type: '离散条件',
	  		createTime: '2016-09-21 08:50:08',
	  		creator: 'Superadmin',
	  		extraData: {
	  			lastUpdateTime: '2016-10-26',
	  			version: '1.0.0',
	  			env: 'dev',
	  		},
	  	})
	  }
	  data.push({
	  		key: `Test4`,
	  		code: `cd3`,
	  		name: '交易场景',
	  		type: '离散条件',
	  		createTime: '2016-09-21 08:50:08',
	  		creator: 'Normaladmin',
	  		extraData: {
	  			lastUpdateTime: '2016-10-26',
	  			version: '1.0.0',
	  			env: 'dev',
	  		},
	  })
	  data.push({
	  		key: `Test5`,
	  		code: `cd4`,
	  		name: '账户类型',
	  		type: '离散条件',
	  		createTime: '2016-09-21 08:50:08',
	  		creator: 'Normaladmin',
	  		extraData: {
	  			lastUpdateTime: '2016-10-26',
	  			version: '1.0.0',
	  			env: 'dev',
	  		},
	  })
        this.state = {
        	dataSource: data
        }
    }

    render() {
    	const columns = [
		{ title: '代码', dataIndex: 'code', key: 'code', 
			render: (text) => {
				return <a>{text}</a>
			}
		},
		{ title: '名称', dataIndex: 'name', key: 'name'},
		{ title: '类型', dataIndex: 'type', key: 'type' },
		{ title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
		{ title: '创建者', dataIndex: 'creator', key: 'creator' },
		{ 
			title: '操作', dataIndex: 'option', key: 'option', 
			render: (text, record, index) => {
				return (
					<span className="table-options">
						<a>查看</a>
						<a>编辑</a>
						<a>更多</a>
					</span>
				)
			},
		},
	]
        return (
            <Table 
           		//{...tableProps}
           		columns={columns}
           		dataSource={this.state.dataSource}
           		size='small'
           		bordered
           		rowSelection= {{}}
           		//expandedRowRender={expandedRowRender}
           	/>
        );
    }
}

export default DataTabTable;
