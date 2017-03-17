import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import './Base.less'

import HeaderBar from '../components/Header/HeaderBar'
import SiderMenu from '../components/Sider/SiderMenu'
import Breadcrumb from '../components/Content/Breadcrumb'
import Searcher from '../components/Content/Searcher'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class BaseLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
        	collapsed: false,
    		mode: 'inline',
            isAdvSearchShow: false,
        }
    }

    onCollapse = (collapsed) => {
	    console.log(collapsed);
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline',
	    });
	  }
    onChangeAdvSearch = () => {
      console.log("search click")
      this.setState({
        isAdvSearchShow: !this.state.isAdvSearchShow
      })
    }
  render() {
    const { children } = this.props
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" >ServiceBot</div>
          <SiderMenu mode={this.state.mode}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="layout-header">
          	<HeaderBar/>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="content-bar">
              <Breadcrumb/>
              <Searcher 
                onChangeAdvSearch={this.onChangeAdvSearch}
                isAdvSearchShow={this.state.isAdvSearchShow}
              />
            </div>
            {/*<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>*/}
            {children /*&&
                React.cloneElement(children, {
                  isAdvSearchShow: this.state.isAdvSearchShow
                })*/
             }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/*Ant Design ©2016 Created by Ant UED*/}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
