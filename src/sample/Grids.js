/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: liuxy Created:03/21/2018
 */
import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './Grids.css';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default class GridSample extends Component {
    render() {
        return (
            <div className="grid-sample">
                <div>
                    <h4>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架</h4>
                    <h5>通过row在水平方向建立一组column（简写col）</h5>
                    <h5>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</h5>
                    <h5>栅格系统中的列是指1到24的值来表示其跨越的范围</h5>
                    <h5>如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列</h5>
                </div>
                <div>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>
                <h4>区块间隔</h4>
                <h5>栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)</h5>
                <h5>{'如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。'}</h5>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                    </Row>
                </div>
                <h4>左右偏移、列偏移</h4>
                <h5>使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。</h5>
                <div>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8} offset={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={6}>col-6 col-offset-6</Col>
                        <Col span={6} offset={6}>col-6 col-offset-6</Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>col-12 col-offset-6</Col>
                    </Row>
                </div>
                <h4>栅格排序、列排序</h4>
                <h5>通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。</h5>
                <div>
                    <Row>
                        <Col span={18} push={6}>col-18 col-push-6</Col>
                        <Col span={6} pull={18}>col-6 col-pull-18</Col>
                    </Row>
                </div>
                <h4>Flex 布局</h4>
                <h5>使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。</h5>
                <div>
                    <p>sub-element align left</p>
                    <Row type="flex" justify="start">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <p>sub-element align center</p>
                    <Row type="flex" justify="center">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <p>sub-element align right</p>
                    <Row type="flex" justify="end">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <p>sub-element monospaced arrangement</p>
                    <Row type="flex" justify="space-between">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <p>sub-element align full</p>
                    <Row type="flex" justify="space-around">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                </div>
                <h4>Flex 对齐</h4>
                <h5>Flex 子元素垂直对齐</h5>
                <div>
                    <p>Align Top justify="center"</p>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>

                    <p>Align Center justify="space-around"</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>

                    <p>Align Bottom justify="space-between"</p>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>
                </div>
                <h4>Flex 排序</h4>
                <h5>通过 Flex 布局的 Order 来改变元素的排序。</h5>
                <div>
                    <Row type="flex">
                        <Col span={6} order={4}>1 col-order-4</Col>
                        <Col span={6} order={3}>2 col-order-3</Col>
                        <Col span={6} order={2}>3 col-order-2</Col>
                        <Col span={6} order={1}>4 col-order-1</Col>
                    </Row>
                </div>
                <h4>响应式布局</h4>
                <h5>参照 Bootstrap 的 响应式设计，预设五个响应尺寸：xs sm md lg xl xxl。</h5>
                <div>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                    </Row>
                </div>
            </div>
        );
    }
}
