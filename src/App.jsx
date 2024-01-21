import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Input } from 'antd';
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined />),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState('200');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    function handleCollapse(value) {
        setCollapsed(value);
        value ? setSiderWidth('80') : setSiderWidth('200');
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                collapsible
                collapsed={collapsed}
                onCollapse={handleCollapse}>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                    onClick={() => {
                        setCollapsed(false);
                        setSiderWidth('200');
                    }}
                />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout
                style={{
                    width: `calc(100vw - ${siderWidth}px)`,
                    marginLeft: `${siderWidth}px`,
                }}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}>
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            color: '#000',
                        }}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci aut reiciendis eos labore distinctio
                            laboriosam obcaecati nihil omnis reprehenderit
                            dignissimos, vel voluptate, fugiat inventore
                            necessitatibus tenetur sapiente laudantium cum. Ut.
                        </p>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        width: '100%',
                    }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;
