import React, { Component, PropTypes } from 'react';
import { Tabs, Row, Col, Card, Button, Input, Tooltip, notification, message, Icon } from 'antd'
import './DataTab.less'
import DataTabTable from './DataTabTable.js'
import DataChart from './DataChart.js'
//react dnd
import { DragSource } from 'react-dnd' 

const TabPane = Tabs.TabPane

class DataTab extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            tabPanes: [
                {title: '列表tab实例', key: '1', content: <DataTabTable/>},
                {title: '图表实例', key: '2', content: <DataChart/>},
                {title: '列表tab实例2', key: '3', content: <DataTabTable/>},
            ],
            panes: 1, 
            tabPane1: [
                {title: '列表tab实例', key: '1', content: <DataTabTable/>},
                {title: '列表tab实例2', key: '3', content: <DataTabTable/>},
            ],
            tabPane2: [
                {title: '图表实例', key: '2', content: <DataChart/>},    
            ],
            isEditable: false,
            com: '',
            com2: '',
        }
    }
    onRetract = () => {
        const { expandedRowKeys, expandedAction, content } = this.props
        //expandedRowKeys.filter((item) =>  (item !== content.key) )
        //console.log(expandedRowKeys, content,  expandedRowKeys.filter((item) =>  (item !== content.key) ));
        expandedAction(
            expandedRowKeys.filter((item) =>  (item !== content.key) )
        )
    }
    render() {

      const { content, title, extraTitle, isCheckingDetail } = this.props
      const { tabPanes, isEditable, panes, tabPane1, tabPane2 } = this.state
      const operation = <Button onClick={
                                        () => {
                                            this.setState({panes: 2})
                                            message.success("划分成功")
                                        }
                                    }>划分Tab</Button>
      const resetOperation = <Button onClick={
                                        () => {
                                            this.setState({panes: 1})
                                            message.success("恢复成功")
                                        }
                                    }>恢复Tab</Button>
      const detail = title.map((item, index, array) => {
        if( !content[item.dataIndex] ){ return; }
        return  <Col span={8} className="content-data-col" key={`${index}-data-col`}>
                        <Row gutter={16}  type="flex" align="middle">
                            <Col span={8}  className="content-title" key={`${index}-title`}><span>{`${item.title} : `}</span></Col>
                            <Col span={16} className="content-data" key={`${index}-data`}>
                                {isEditable? 
                                    <Input defaultValue={content[item.dataIndex]}></Input> : 
                                    <Tooltip title="双击编辑" style={{width: 70}} placement="right">
                                        <span 
                                            onDoubleClick={() => {this.setState({isEditable: !isEditable})}}
                                        >
                                            {content[item.dataIndex]}
                                            </span>
                                    </Tooltip>
                                }

                            </Col>
                        </Row>
                    </Col>
      })
      const extraDetail = extraTitle.map((item, index, array) => {
        if( !content.extraData[item.dataIndex] ){ return; }
        return  <Col span={8} className="content-data-col" key={`${index}-extra-data-col`}>
                        <Row gutter={16} type="flex" align="middle">
                            <Col span={8}  className="content-title" key={`${index}-extra-title`}><span>{`${item.title} : `}</span></Col>
                            <Col span={16} className="content-data" key={`${index}-extra-data`}>
                                {isEditable? 
                                    <Input defaultValue={content.extraData[item.dataIndex]}></Input> : 
                                    <Tooltip title="双击编辑">
                                        <span 
                                            onDoubleClick={() => {this.setState({isEditable: !isEditable})}}
                                        >
                                            {content.extraData[item.dataIndex]}
                                        </span>
                                    </Tooltip>
                                }
                            </Col>
                        </Row>
                    </Col>
      })
      const TabsProps = {
        tabBarExtraContent: operation,
        //type: 'editable-card',
        //hideAdd: true,
      }
      const resetTabsProps = {
        tabBarExtraContent: resetOperation,
      }
      const editBtnText = isEditable ? "取消" : "编辑"
     // console.log("content: ", content, "title: ", title);
      return (
            <Card className="table-content-card">
              <Row gutter={16} /*style={{marginBottom: 4}}  type="flex" justify="space-around" align="middle"*/>
                  {detail/*.concat(extraDetail)*/}
              </Row>
              {/*<span>额外内容: </span>*/}
              <Row gutter={16} style={{marginBottom: 4}}>
                  {extraDetail}
              </Row>
              <div className='detailBtnWrapper'>
                <Button 
                    type="primary" 
                    style={{marginRight: 10}} 
                    onClick={
                        () => {this.setState({isEditable: !isEditable})}
                    }
                >
                    {editBtnText}
                </Button>
                <Button 
                    style={{marginRight: 10}} 
                    onClick={
                        this.onRetract
                    }
                >
                    收起
                </Button>
                {
                    isEditable &&<Button onClick={
                        () => {
                            this.setState({isEditable: false})
                            const noticeConfig = {
                                    message: '保存成功',
                                    description: '成功编辑完成数据',
                                    duration: 2,
                                }
                            notification.success(noticeConfig)
                        }}>保存</Button>
                }
              </div>
              {!isCheckingDetail &&<div>
              { (panes === 1) ?
	       <Tabs /*type="card"*/ {...TabsProps}>
                        {/*<div className="tabPanesWrapper">*/}
                            {tabPanes.map((pane) => 
                              <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>  
                            )}	
                       {/* </div>*/}
        	       </Tabs> :
                   <div>
                        <Tabs {...resetTabsProps}>
                           {tabPane1.map((pane) => 
                                  <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>  
                                )}
                       </Tabs>
                       <Tabs>
                        {tabPane2.map((pane) => 
                              <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>  
                            )}   
                        </Tabs>
                   </div>
               }
               </div>}
            </Card>
      );
    }
}

export default DataTab;
