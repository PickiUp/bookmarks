import React, { useState } from 'react';
import {
    DesktopOutlined,
    ToolOutlined,
    PicCenterOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Input } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';

import '../App.scss';

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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
const TelegramSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 50 50">
        <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
    </svg>
);
const YoutubeSvg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 50 50">
        <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
    </svg>
);
const BilibiliSvg = () => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor">
        <g
            id="SVGRepo_bgCarrier"
            stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <path
                    fill="none"
                    d="M0 0h24v24H0z"></path>
                <path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"></path>{' '}
            </g>
        </g>
    </svg>
);

const YoutubeIcon = (props) => (
    <Icon
        component={YoutubeSvg}
        {...props}
    />
);
const TelegramIcon = (props) => (
    <Icon
        component={TelegramSvg}
        {...props}
    />
);
const BilibiliIcon = (props) => (
    <Icon
        component={BilibiliSvg}
        {...props}
    />
);
const items = [
    getItem(
        'Online Tools',
        '1',
        <Link to={'/onlineTools'}>
            <ToolOutlined />
        </Link>,
    ),
    getItem(
        'Websites',
        '2',
        <Link to={'/websites'}>
            <DesktopOutlined />
        </Link>,
    ),
    getItem(
        'Channel',
        'sub-channel',
        <PicCenterOutlined
            style={{
                color: '#fff',
                width: '1em',
                height: '1em',
            }}
        />,
        [
            getItem(
                'Bilibili',
                '3',
                <BilibiliIcon
                    style={{
                        width: '1em',
                        height: '1em',
                    }}
                />,
            ),
            getItem(
                'Youtube',
                '4',
                <YoutubeIcon
                    style={{
                        color: '#fff',
                        width: '1em',
                        height: '1em',
                    }}
                />,
            ),
            getItem(
                'Telegram',
                '5',
                <TelegramIcon
                    style={{
                        color: '#fff',
                        width: '1em',
                        height: '1em',
                    }}
                />,
            ),
        ],
    ),
];
Breadcrumb.Item.__ANT_BREADCRUMB_ITEM = true;

Breadcrumb.Separator.__ANT_BREADCRUMB_SEPARATOR = true;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState('200');

    const [value, setValue] = useState('');

    const onSearch = (value) => {
        setValue(value);
    };
    function handleCollapse(value) {
        setCollapsed(value);
        value ? setSiderWidth('80') : setSiderWidth('200');
    }

    useEffect(() => {
        function highlightKeyword(keyword) {
            let keywordArr = [];
            if (keyword.includes(' ')) {
                keywordArr = keyword.split(' ');
                for (const keyword of keywordArr) {
                    highlight(keyword);
                }
            } else {
                highlight(keyword);
            }
        }
        function replaceTextWithHighlightText(element, replaceText) {
            if (element.innerHTML.match(new RegExp(replaceText, 'gi'))) {
                if (
                    !element.innerHTML.match(
                        /<span style="background-color:yellow">.*<\/span>/,
                    )
                ) {
                    element.innerHTML = element.innerHTML.replaceAll(
                        new RegExp(replaceText, 'gi'),
                        `<span style="background-color:yellow">${replaceText}</span>`,
                    );
                }
            }
            return;
        }
        function highlight(keyword) {
            const cardSections = document.querySelectorAll('.card-section');
            cardSections.forEach((section) => {
                const cardHeader = section.querySelector('.card-header');
                replaceTextWithHighlightText(cardHeader, keyword);
                const cardItems = section.querySelectorAll('.card-item');
                cardItems.forEach((item) => {
                    const title = item.querySelector('.card-info a h3');
                    replaceTextWithHighlightText(title, keyword);
                    const desc = item.querySelector('.card-info p');
                    replaceTextWithHighlightText(desc, keyword);
                });
            });
        }
        function clearExistedHighlightText() {
            const regex = /(<span style="background-color:yellow">|<\/span>)/gi;
            const cardSections = document.querySelectorAll('.card-section');
            cardSections.forEach((section) => {
                const cardHeader = section.querySelector('.card-header');
                clearSpan(cardHeader);

                const cardItems = section.querySelectorAll('.card-item');
                cardItems.forEach((item) => {
                    const title = item.querySelector('.card-info a h3');
                    clearSpan(title);
                    const desc = item.querySelector('.card-info p');
                    clearSpan(desc);
                });
            });

            function clearSpan(element) {
                if (element.innerHTML.match(regex)) {
                    element.innerHTML = element.innerHTML.replaceAll(regex, '');
                }
            }
        }
        clearExistedHighlightText();
        highlightKeyword(value);
    }, [value]);

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
                    transition: 'all 0.2s',
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
                    overflow: 'hidden',
                    transition: 'all 0.2s',
                }}>
                <Content
                    style={{
                        margin: '0 16px',
                    }}>
                    <Outlet context={[value]} />
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
