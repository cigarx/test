/**
 * Created by zhanglei on 2017/3/16.
 */
import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';
import './newContent.less'
// rowSelection object indicates the need for row selection
class UserTable extends Component {
    static PropTypes ={
        className:PropTypes.string
    };
    constructor(props){
        super(props);
        this.data1 = {
            "data": [
                {
                    "id": "id1",
                    "emplid": "emplid1",
                    "paic_um_num": "um1",
                    "last_name": "name1",
                    "email": "email1",
                    "paic_mobile_phone": "mobilephone1",
                    "phone": "phone1",
                    "extension": "extension1",
                    "empl_status": "emplstatus1",
                    "paic_empsts_desc": "desc1",
                    "paic_leave_date": "2017-01-01",
                    "business_unit": "PA011",
                    "paic_bu_desc": "平安科技",
                    "deptid": "123",
                    "paic_out_date": 1489593600000,
                    "isreal": false,
                    "status": true,
                    "paic_dptmanager": "456"
                },
                {
                    "id": "id2",
                    "emplid": "emplid2",
                    "paic_um_num": "um2",
                    "last_name": "name2",
                    "email": "email2",
                    "paic_mobile_phone": "mobilephone2",
                    "phone": "phone2",
                    "extension": "extension2",
                    "empl_status": "emplstatus2",
                    "paic_empsts_desc": "desc2",
                    "paic_leave_date": "2017-01-01",
                    "business_unit": "PA011",
                    "paic_bu_desc": "平安科技",
                    "deptid": "123",
                    "paic_out_date": 1489593600000,
                    "isreal": false,
                    "status": true,
                    "paic_dptmanager": "789"
                }
            ],
            "hasErrors": false,
            "errorMsg": ""
        };
        this.mm = [];
        this.data1.data.map((e,i)=>
                this.mm[i] = {key:e.id,name:e.last_name,age:e.paic_um_num,address:e.business_unit,description:e.business_unit}
        );
        this.state={'dataSource':this.mm,count:2};
        console.log(this.state)

    };
    onDelete = (index) => {
        const dataSource = [...this.state.dataSource];
        console.log(dataSource,index);
        dataSource.splice(index, 1);
        console.log(dataSource,index);
        this.setState({ dataSource });
    };
    render(){

        const columns = [
            { title: '姓名', dataIndex: 'name', key: '1' },
            { title: 'UM', dataIndex: 'age', key: '2' },
            { title: '部门', dataIndex: 'age', key: '3' },
            { title: '公司', dataIndex: 'age', key: '4' },
            { title: '角色', dataIndex: 'address', key: '5' },
            { title: '操作', dataIndex: '', key: '6', render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            }}
        ];
        const { dataSource } = this.state;
        return (
            <div className='userTable'>
                <Table columns={columns} dataSource={ dataSource } expandedRowRender={record => <p>{record.description}</p>}/>
            </div>
        )
    }
}
export default UserTable;