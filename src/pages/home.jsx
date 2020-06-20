import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import "./index.css";
import TabsItem from '../component/tabs/'
import { AppstoreAddOutlined, DesktopOutlined, ScanOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            tabsKey: "1"
        }
    }
    changeType = () => {
        this.setState({
            type: 1,
            tabsKey: "3"
        })
    };
    onTabClick =(e) => {
        this.setState({
            type: 0,
            tabsKey: e
        })
    }
    render() {
        return (
            <div className="box">
                <div className="login-box">
                    <div className="login-header">欢迎进入管理系统</div>
                    <div className="login">
                        <div className="tab-header">
                            <Tabs activeKey={this.state.tabsKey} onTabClick={(e)=> this.onTabClick(e)}>
                                <TabPane tab="密码登录" key="1">
                                    <TabsItem tabsKey="1" />
                                </TabPane>
                                <TabPane tab="短信登录" key="2">
                                    <TabsItem tabsKey="2" />
                                </TabPane>
                                <TabPane tab="" key="3">
                                    <div className="sao">
                                        <div className="imgbox">
                                            <AppstoreAddOutlined/>
                                        </div>
                                        <div className="saoFooter">
                                            <div className="saoimg"><ScanOutlined /></div>
                                            <div className="info">打开 智维APP 扫一扫登录</div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                            <div className="triangles"></div>
                            <Button type="text" id="switch" onClick={(e) => this.changeType(e)}>{this.state.type === 0 ? <AppstoreAddOutlined /> : <DesktopOutlined />}</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Home;