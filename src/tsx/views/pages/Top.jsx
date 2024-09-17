import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/Top.scss";
import "../../styles/index.scss";
import "../../styles/Heading.scss";
import { Header } from "../components/block/Header.jsx";
import { Introduction } from "../components/block/Introduction.jsx";
import { Cards } from '../components/block/Cards.jsx';
import { Background } from "../components/block/Background.jsx";

export const Top = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  // 画像のパスを変数として設定
  const defaultImage = './img/profile.png'; // デフォルトの画像
  const hoverImage = './img/dog2.png';     // ホバー時の画像

  return (
    <div className='top'>
      <Header />
      <Background />
      <Link to="/">
        <div className='profile'>
          <img className='profileimg' src={isHovered ? hoverImage : defaultImage}
                onMouseEnter={() => setIsHovered(true)}  // ホバー時に画像を変更
                onMouseLeave={() => setIsHovered(false)} // ホバーが外れた時に元に戻す
                width="200px" alt="I.Oのゲーム部屋" />
          <div className='profiletxt'>
            <h1>Ｉ.Ｏのゲーム部屋</h1>
            <p>ゲーム、時々プログラミング</p>
          </div>
        </div>
      </Link>
      <h2 class="heading">自己紹介</h2>
      <Introduction />
      <h2 class="heading">スキル</h2>
      <Cards />
    </div>
  )
}
export default Top