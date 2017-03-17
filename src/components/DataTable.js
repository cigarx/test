import React, { Component, PropTypes } from 'react';
import { Table, Badge, Popconfirm, Button, Card, notification, Icon, Tooltip, Alert } from 'antd'
import classnames from 'classnames'
import './DataTable.less' 
import DataTab from './DataTab.js'
import SearchBar from './SearchBar.js'
import Operation from './Operation.js'
class DataTable extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        const data = []
	  for( let i = 0; i < 6; i++){
	  	data.push({
	  		key: `Test${i}`,
	  		appName: `Test${i}`,
	  		description: '这是一段描述,关于这个应用的描述',
	  		price: '250.00',
	  		state: '关闭',
	  		stateUpdateTime: '2016-09-21 08:50:08',
	  		extraData: {
	  			lastUpdateTime: '2016-10-26',
	  			version: '1.0.0',
	  			env: 'dev',
	  		},
	  	})
	  }
        [
        	'onExpand',
        	'onExpandedRowsChange',
        	'onDetailClick',
        	'onDelete',
        	'onDeleteRows',
        	'onAdd',
        	'onSelectChange',
        ].forEach((item) => {
        	this[item] = this[item].bind(this)
        })

        this.state = {
        	dataSource: data,
        	expandedRowKeys: [],
        	count: 0,
        	selectedRowKeys: [],
        	isCheckingDetail: false,
        	selected: false,
        }
    }

    onExpand(expanded, record) {
    	console.log("expanded: ", expanded, record);
    	this.setState({
    		isCheckingDetail: false
    	})
    }
    onExpandedRowsChange(expandedRows){
    	console.log('expandedRows: ', expandedRows);
    	this.setState({
    		expandedRowKeys: expandedRows,
    	})
    }
    onSelectChange(selectedRowKeys, selectedRows){
    	console.log("selectedRowKeys: ", selectedRowKeys, "selectedRows: ", selectedRows)

    	this.setState({
    		selectedRowKeys,
    		selected: !!selectedRowKeys.length,
    	})
    }

    onDetailClick(record, index) {
    	const isExisted = this.state.expandedRowKeys.some((item) => {
    		return (record.key === item) ? true : false
    	})
    	if(isExisted) { return }
    	this.setState({
    		expandedRowKeys: this.state.expandedRowKeys.concat([record.key]),
    		isCheckingDetail: true
    	})
    }
    onDelete(index) {
    	const dataSource = [...this.state.dataSource]
    	dataSource.splice(index, 1);
    	this.setState({ dataSource });
    	const noticeConfig = {
		message: '删除成功',
		description: '添加删除 1 条列表内容',
		duration: 2,
	}
	notification.success(noticeConfig)
    }
    onDeleteRows() {
    	const { dataSource, selectedRowKeys } = this.state
	const newDataSource = dataSource.filter(
			(data) => 
		     		selectedRowKeys.some(
		    			key => (key === data.key) ? true : false
		    		) ?  false : true
		    	)
	this.setState({
		dataSource: newDataSource,
		selectedRowKeys: []
	})
	const noticeConfig = {
		message: '删除成功',
		description: `添加删除 ${selectedRowKeys.length} 条列表内容`,
		duration: 2,
	}
	if( selectedRowKeys.length === 0){
		notification.error({
			message: '删除失败',
			description: `至少选中 1 项`,
			duration: 2,
		})
		return
	}
	notification.success(noticeConfig)
    }
    onAdd() {
    	const { count, dataSource, } = this.state
    	const newData = {
	  		key: `TestTest${count}`,
	  		appName: `新增加项${count}`,
	  		description: '这是一段描述,关于这个应用的描述',
	  		price: '250.00',
	  		state: '关闭',
	  		stateUpdateTime: '2016-09-21 08:50:08',
	  		extraData: {
	  			lastUpdateTime: '2016-10-26',
	  			version: '1.0.0',
	  			env: 'dev',
	  		},
	  	}
	const noticeConfig = {
		message: '添加成功',
		description: '添加成功 1 条列表内容',
		duration: 2,
	}

	this.setState({
		dataSource: [...dataSource, newData],
		count: count+1,
	})
	notification.success(noticeConfig)
    }

    render() {
  	const columns = [
		{ title: '应用名', dataIndex: 'appName', key: 'appName', 
			onCellClick: (record, event) => {console.log("record: ", record, "event: ", event)} 
		},
		{ title: '描述', dataIndex: 'description', key: 'description'/*, className: "description"*/ },
		{ title: '定价', dataIndex: 'price', key: 'price' },
		{ title: '状态', dataIndex: 'state', key: 'state', render: (text) => <span><Badge status='error'/>{text}</span> },
		{ title: '状态更新时间', dataIndex: 'stateUpdateTime', key: 'stateUpdateTime' },
		{ 
			title: '操作', dataIndex: 'option', key: 'option', 
			render: (text, record, index) => {
				return (
					<span className="table-options">
						<Popconfirm title="确认删除" onConfirm={() => this.onDelete(index)}>
							{/*<a onClick={() => this.onDelete(index)}>删除</a>*/}
							<Icon type="delete" className='icons-operation'/>
						</Popconfirm>
						{/*<a onClick={() => this.onDetailClick(record, index)}>查看详情</a>*/}
						<Tooltip title="查看详情" style={{width: 70}} placement="bottom">
							<Icon 
								type="ellipsis" 
								className='icons-operation'
								onClick={() => this.onDetailClick(record, index)}
								/>
						</Tooltip>
					</span>
				)
			},
		},
	]
	const extraCols = [
		{ title: '最后更新时间', dataIndex: 'lastUpdateTime', key: 'lastUpdateTime' },
		{ title: '版本', dataIndex: 'version', key: 'version' },
		{ title: '部署环境', dataIndex: 'env', key: 'env' },
	];
	const expandedRowRender = (record) => 
			<DataTab 
				content={record} 
				title={columns} 
				extraTitle={extraCols} 
				isCheckingDetail={this.state.isCheckingDetail}
				expandedRowKeys={this.state.expandedRowKeys}
				expandedAction={this.onExpandedRowsChange}
			/>	
	const { selectedRowKeys, selected } = this.state
	const tableProps = {
		rowSelection: {
			selectedRowKeys,
			onChange: this.onSelectChange,
		},
		size: 'middle',
		onExpand: this.onExpand,
		onExpandedRowsChange: this.onExpandedRowsChange,
		expandedRowKeys: this.state.expandedRowKeys,
	}
	const alertOpn = {
		type: 'info',
		//closable: 'false',
		message: (
			<div>批量操作
				<Button onClick={this.onAdd}>添加</Button>
	       		<Button onClick={this.onDeleteRows}>删除</Button>
	       	</div>
		),
		/*description: (<div>批量操作
			<Button onClick={this.onAdd}>添加</Button>
	       	<Button onClick={this.onDeleteRows}>删除</Button></div>
		),*/
		className: classnames({
			"card-alert-show": selected,
			"card-alert-hide": !selected,
		})
	}
       return (	
       	<Card>
       		<Card style={{margin: 10, textAlign: 'left'}} >
	       		<SearchBar extraAction={{addBtn: this.onAdd, delBtn: this.onDeleteRows}}/>
	       		{/*<Button onClick={this.onAdd}>添加</Button>
	       		<Button onClick={this.onDeleteRows}>删除</Button>*/}
       		 </Card>
       		 <Alert 
       		 	{...alertOpn}
       		 />
	             <Table 
	             		{...tableProps}
	             		columns={columns}
	             		dataSource={this.state.dataSource}
	             		expandedRowRender={expandedRowRender}
	             		footer={() => 
	             			<Icon type="plus" onClick={this.onAdd} style={{textAlign: 'center', cursor: 'ponter'}}/>}
	             	/>
	             <Operation action={{addBtn: this.onAdd, delBtn: this.onDeleteRows}}/>
           	</Card>
       		
       );
    }
}

export default DataTable;
