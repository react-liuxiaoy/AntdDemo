/* Copyright (c) 2016-2018. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: liuxy Created:03/21/2018
 */
import React, {Component} from 'react';
import {Button, Icon} from 'antd';
const ButtonGroup = Button.Group;

export default class IconSample extends Component {
    render() {
        return (
            <div>
                <div>
                    <Icon type="up" />
                    <Icon type="down" />
                    <Icon type="left" />
                    <Icon type="right" />
                </div>
                <h4 />
                <div>
                    <Icon type="caret-up" />
                    <Icon type="caret-down" />
                    <Icon type="caret-left" />
                    <Icon type="caret-right" />
                </div>
                <h4 />
                <div>
                    <Icon type="up-circle-o" />
                    <Icon type="down-circle-o" />
                    <Icon type="left-circle-o" />
                    <Icon type="right-circle-o" />
                    <Icon type="up-circle" />
                    <Icon type="down-circle" />
                    <Icon type="left-circle" />
                    <Icon type="right-circle" />
                    <Icon type="up-square-o" />
                    <Icon type="down-square-o" />
                    <Icon type="left-square-o" />
                    <Icon type="right-square-o" />
                    <Icon type="up-square" />
                    <Icon type="down-square" />
                    <Icon type="left-square" />
                    <Icon type="right-square" />
                </div>
                <h4 />
                <div>
                    <Icon type="arrow-up" />

                    <Icon type="swap" />
                    <Icon type="swap-left" />
                    <Icon type="swap-right" />

                    <Icon type="forward" />
                    <Icon type="step-forward" />
                    <Icon type="fast-forward" />

                    <Icon type="shrink" />
                    <Icon type="arrows-alt" />

                    <Icon type="double-left" />
                    <Icon type="verticle-left" />

                    <Icon type="rollback" />
                    <Icon type="enter" />
                    <Icon type="retweet" />

                    <Icon type="play-circle" />
                    <Icon type="play-circle-o" />

                    <Icon type="login" />
                    <Icon type="logout" />
                </div>
                <h4 />
                <div>
                    <Icon type="question" style={{ fontSize: 30 }} />
                    <Icon spin type="question" style={{ fontSize: 30, color: '#08c' }} />
                </div>
            </div>
        );
    }
}
