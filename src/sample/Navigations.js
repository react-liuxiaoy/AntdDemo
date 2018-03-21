/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: liuxy Created:03/21/2018
 */
import React, {Component} from 'react';
import {Layout, Affix, Breadcrumb, Dropdown, Menu, Pagination, Steps} from 'antd';
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;

export default class NavigationSample extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const {pageSize = 5} = this.state;
        return (
            <div>

                <h4>水平弹出式菜单</h4>
                <Layout>
                    <Layout.Header>
                        <Menu mode="horizontal">
                            <Menu.Item>Navigation One</Menu.Item>
                            <SubMenu title="Navigation Two">
                                <Menu.Item>Item One</Menu.Item>
                                <Menu.Divider />
                                <Menu.Item disabled>Item Two</Menu.Item>
                            </SubMenu>
                            <SubMenu title="Navigation Three">
                                <SubMenu title="Menu One">
                                    <Menu.Item>Item Three</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Layout.Header>
                </Layout>
                <h4>垂直内嵌式菜单</h4>
                <Layout>
                    <Layout.Sider>
                        <Menu mode="inline" inlineCollapsed>
                            <Menu.Item>Navigation One</Menu.Item>
                            <SubMenu title="Navigation Two">
                                <Menu.Item>Item One</Menu.Item>
                                <Menu.Item disabled>Item Two</Menu.Item>
                            </SubMenu>
                            <SubMenu title="Navigation Three">
                                <SubMenu title="Menu One">
                                    <Menu.Item>Item Three</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <Menu.Item>Navigation Four</Menu.Item>
                        </Menu>
                    </Layout.Sider>
                </Layout>
                <h4>Pagination 分页</h4>
                <Pagination
                    total={50}
                    pageSize={pageSize}
                    pageSizeOptions={[5, 10, 15, 20, 100]}
                    onShowSizeChange={(size) => this.setState({pageSize: size})}
                    showTotal={(sum,b) => "当前第" + b[0] + "到第" + b[1] + "条数据" + "共" + sum + "条"}
                    showSizeChanger
                    showQuickJumper />
                <h4>Steps 步骤条</h4>
                <Steps current={2} status="error">
                    <Step title="第一步" />
                    <Step title="第二步" />
                    <Step title="第三步" />
                </Steps>
                <Affix style={{ position: 'absolute', top: 200, left: 200}}>
                    这是一个 Affix
                </Affix>
            </div>
        );
    }
}
