/**
 * Created by zhanglei on 2017/3/16.
 */
import React, { Component, PropTypes } from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            }
        }];
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
                this.mm[i] = {key:e.id,name:e.last_name,age:e.paic_um_num,address:e.business_unit}
        );
        this.state={'dataSource':this.mm,count:2};
        console.log(this.state)
    }
    onDelete = (index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        console.log(dataSource,index)
        this.setState({ dataSource });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
export default UserTable;