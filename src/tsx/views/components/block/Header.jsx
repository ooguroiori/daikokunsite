import React from 'react';
import "../../../styles/Header.scss";
import { Logo } from "../atoms/logo.jsx";
import { useLocation } from 'react-router-dom';

const Header = (props) => {
    const location = useLocation();
    // Topページのみアニメーションを適用する
    const shouldAnimate = location.pathname === "/";

    const menuitems = [
        {name: 'TOP', link: './'},
        {name: '制作物', link: './Deliverable'},
        {name: '記事', link: './Article'},
        ];
    return (
    <div className={shouldAnimate ? "header animate" : "header"}>
        <div className='logo'>
            <Logo />
        </div>
        {/* ナビゲーションメニュー */}
        <nav className="nav-menu">
            <ul>
                {menuitems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>

        {/* ハンバーガーメニュー部分 */}
        <div className="nav">
            {/* ハンバーガーメニューの表示・非表示を切り替えるチェックボックス */}
            <input id="drawer_input" class="drawer_hidden" type="checkbox" />
        
            {/* ハンバーガーアイコン */}
            <label for="drawer_input" class="drawer_open"><span></span></label>
        
            {/* メニュー */}
            <nav className="nav_content">
            <ul className="nav_list">
                {menuitems.map((item, index) => (
                    <li className="nav_item" key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
            </nav>
        </div>
        
    </div>
    )
}
export { Header } ;