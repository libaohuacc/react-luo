import React from 'react';
import { Link } from 'react-router-dom';
import P from 'prop-types';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
        };
    }

    // 组件初始化完毕时触发
    componentDidMount() {
    }

    render() {
        return (
            <div className="menu">
                <Link to="/home">首页</Link>|
                <Link to="/features">构建与特性</Link>|
                <Link to={{ pathname: '/test', search: '?t1=abc&t2=123', query: { t3: 'aaa', t4: 'bbb'} }}>测试页面</Link>|
                <a href="https://github.com/javaLuo/react-luo" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        );
    }
}

Menu.propTypes = {
    value: P.number,
    onClick: P.func,
    fetchValue: P.array,
};

export default Menu;
