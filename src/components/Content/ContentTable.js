import React, { Component, PropTypes } from 'react';
import { Table, Icon, Badge } from 'antd'
import TableExpandedRow from './TableExpandedRow'

class ContentTable extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        [
        	'onDetailClick',
        	'onExpandedRowsChange',
        ].forEach((item) => {
        	this[item] = this[item].bind(this)
        })

        this.state = {
        	expandedRowKeys: [],
        }
    }

    onDetailClick(record, index) {
    	console.log("onDetailClick");
    	const { expandedRowKeys } = this.state
    	const isExisted = expandedRowKeys.some((item) => {
    		return (record.key === item) ? true : false
    	})
    	if(isExisted) { return }
    	this.setState({
    		expandedRowKeys: expandedRowKeys.concat([record.key]),
    	})
    }
    onExpandedRowsChange(expandedRows){
    	console.log('expandedRows: ', expandedRows);
    	this.setState({
    		expandedRowKeys: expandedRows,
    	})
    }

    render() {
    	  const { expandedRowKeys } = this.state
    	  const columns = [
		{ title: '服务名称', dataIndex: 'serviceName', key: 'serviceName',
			onCellClick: (record, event) => {console.log("record: ", record, "event: ", event)}
		},
		{ title: 'ID', dataIndex: 'serviceId', key: 'serviceId' },
		{ title: '描述', dataIndex: 'description', key: 'description' },
		{ title: '服务提供组', dataIndex: 'serviceGroup', key: 'serviceGroup' },
		{ title: '状态', dataIndex: 'state', key: 'state', render: (text) => <span><Badge status='success'/>{text}</span> },
		{
			title: '操作', dataIndex: 'option', key: 'option',
			render: (text, record, index) => {
				return (
					<span className="table-options">
						<Icon type="delete" className='icons-operation'/>
						<Icon
							type="ellipsis"
							className='icons-operation'
							onClick={() => this.onDetailClick(record, index)}
						/>
					</span>
				)
			},
		},
	  ]
	  const expandedRowRender = (record) =>  <TableExpandedRow rowData={record} tableHeader={columns}/>
	  const data = []
/*	  for(let i = 0; i < 46; i++){
	  	data.push({
	  		key: i,

	  	})
	  }*/
	  data.push({
	  	key: 1,
	  	serviceName: 'IP电话号码申请',
	  	serviceId: 1,
	  	description: 'IP电话号码申请描述',
	  	serviceGroup: '服务组1',
	  	state: '可用',
	  })
	  const tableProps = {
	  	onExpandedRowsChange: this.onExpandedRowsChange,
	  	expandedRowKeys: this.state.expandedRowKeys
	  }
	  const hidePlugIconProps = {
	  	expandIconAsCell: false,
	  	expandIconColumnIndex: -1,
	  }
        return (
            <Table
            	  {...tableProps}
            	  {...hidePlugIconProps}
            	  columns={columns}
            	  expandedRowRender={expandedRowRender}
            	  dataSource={data}
            />
        );
    }
}

export default ContentTable;
