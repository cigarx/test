import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd'

const { SubMenu, ItemGroup: MenuItemGroup, Item: MenuItem } = Menu

class SiderMenu extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
    	  const { mode } = this.props
        return (
            <Menu theme="dark" mode={mode}>
            		<SubMenu 
            		  key="sub1" 
            		  title={<span><Icon type="compass"/><span className="nav-text">服务目录</span></span>}
            		>
            			<SubMenu key="sub1-1" title="服务请求">
            				<MenuItem key="gp1-1" title="">办公</MenuItem>
            				<MenuItem key="gp1-2" title="">系统</MenuItem>
            			</SubMenu>
            			<SubMenu key="sub1-2"title="故障请求">
            				<MenuItem key="gp2-1" title="">办公</MenuItem>
            				<MenuItem key="gp2-2" title="">系统</MenuItem>
            			</SubMenu>
            		</SubMenu>
					<SubMenu
						key="sub2"
						title={<span><Icon type="compass"/><span className="nav-text">用户模型</span></span>}
						>
						<SubMenu key="sub2-1" title="服务请求">
							<MenuItem key="gp3-1" title="">用户管理</MenuItem>
							<MenuItem key="gp3-2" title="">角色管理</MenuItem>
							<MenuItem key="gp4-1" title="">权限管理</MenuItem>
						</SubMenu>
					</SubMenu>
            </Menu>
        );
    }
}

export default SiderMenu;
