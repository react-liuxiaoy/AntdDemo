/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: liuxy Created:03/21/2018
 */
import React, {Component} from 'react';
import {Button, Icon} from 'antd';
const ButtonGroup = Button.Group;

export default class ButtonSample extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button type="default">Default</Button>
                    <Button>None</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <br />
                <div>
                    <Button icon="search" shape="circle"/>
                    <Button icon="search" shape="circle" type="primary"/>
                    <Button icon="search"/>
                    <Button icon="search" type="primary">Search</Button>
                </div>
                <br />
                <div>
                    <Button size="large">Large</Button>
                    <Button>Default</Button>
                    <Button size="small">Small</Button>
                </div>
                <br />
                <div>
                    <Button disabled type="primary">Primary(disabled)</Button>
                    <Button disabled type="default">Default(disabled)</Button>
                    <Button disabled type="dashed">Dashed(disabled)</Button>
                    <Button disabled type="danger">Danger(disabled)</Button>
                </div>
                <br />
                <div>
                    <Button loading>Loading</Button>
                    <Button loading/>
                </div>
                <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                    <Button type="primary" ghost>Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                </div>
                <div>
                    <h4>Basic</h4>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button>OK</Button>
                    </ButtonGroup>
                    <h6/>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>R</Button>
                    </ButtonGroup>
                    <h6/>
                    <ButtonGroup>
                        <Button>L</Button>
                        <Button>M</Button>
                        <Button>R</Button>
                    </ButtonGroup>

                    <h4>With Icon</h4>
                    <ButtonGroup>
                        <Button icon="left" type="primary">
                            Go back
                        </Button>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                    <h6/>
                    <ButtonGroup>
                        <Button type="primary" icon="cloud" />
                        <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
