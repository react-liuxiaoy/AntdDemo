/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: liuxy Created:03/21/2018
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
import './Layouts.css';

export default class LayoutSample extends Component {
    render() {
        return (
            <div className="layout-sample">
                <h4>1</h4>
                <Layout>
                    <Layout.Header>header</Layout.Header>
                    <Layout.Content>main content</Layout.Content>
                    <Layout.Footer>footer</Layout.Footer>
                </Layout>
                <h4>2</h4>
                <Layout>
                    <Layout.Header>header</Layout.Header>
                    <Layout>
                        <Layout.Sider>left sidebar</Layout.Sider>
                    </Layout>
                    <Layout.Content>main content</Layout.Content>
                    <Layout.Footer>footer</Layout.Footer>
                </Layout>
                <h4>3</h4>
                <Layout>
                    <Layout.Header>header</Layout.Header>
                    <Layout>
                        <Layout.Content>main content</Layout.Content>
                        <Layout.Sider>right sidebar</Layout.Sider>
                    </Layout>
                    <Layout.Footer>footer</Layout.Footer>
                </Layout>
                <h4>4</h4>
                <Layout>
                    <Layout.Sider>top sidebar</Layout.Sider>
                    <Layout>
                        <Layout.Header>header</Layout.Header>
                        <Layout.Content>main content</Layout.Content>
                        <Layout.Footer>footer</Layout.Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
