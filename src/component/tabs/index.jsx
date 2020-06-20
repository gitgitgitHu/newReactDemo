import React, { Component } from 'react';
import { Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined, InsuranceOutlined } from '@ant-design/icons';
class TabsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {this.props.tabsKey === '1'
                    ? <div className="tab-content">
                        <div className="inputList">
                            <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
                            <Input placeholder="请输入密码" prefix={<LockOutlined />} />
                        </div>
                        <div className="tab-footer">
                            <Button type="primary" block>登录</Button>
                            <div className="footer">
                                <Checkbox>自动登录</Checkbox>
                                <div>忘记密码?</div>
                            </div>
                        </div>
                    </div>
                    : <div className="tab-content">
                        <div className="inputList">
                            <Input placeholder="请输入用户名" prefix={<MobileOutlined />} />
                            <Input placeholder="请输入密码" prefix={<InsuranceOutlined />} />
                        </div>
                        <div className="tab-footer">
                            <Button type="primary" block>登录</Button>
                            <div className="footer">
                                <Checkbox>自动登录</Checkbox>
                                <div>忘记密码?</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    };
}
export default TabsItem;