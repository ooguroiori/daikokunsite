import React, { useEffect, useRef } from 'react';
import "../../../styles/Introduction.scss";

const Introduction = (props) => {
        // useRefでアニメーションさせたい要素の参照を管理
        const targetsRef = useRef([]);

        useEffect(() => {
            const handleScroll = () => {
                const scroll = window.scrollY;
                const h = window.innerHeight;
                const offset = 100;
    
                targetsRef.current.forEach(target => {
                    if (target) { // 参照が存在するか確認
                        const pos = target.getBoundingClientRect().top + scroll;
                        if (scroll > pos - h + offset) {
                            target.classList.add('is-animated');
                        }
                    }
                });
            };
    
            // 初回レンダリング時にスクロール処理を実行
            handleScroll();
    
            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    
        // 参照を配列に追加するためのコールバック
        const addToRefs = (el) => {
            if (el && !targetsRef.current.includes(el)) {
                targetsRef.current.push(el);
            }
        };
    return (
    <div className="intruduction" ref={addToRefs}>
        <div className="intro-line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="mb-intro-img" ref={addToRefs}>
                <img src="./img/profile.jpg" alt="自己紹介" />
            </div>
            <div className="intro-txt" ref={addToRefs}>
                <div className="intro-title">
                    <img src="./img/senshi_red.png" alt="I.O" />
                    <h2>Ｉ.Ｏ</h2>
                </div>
                <div className="intro-subtxt" ref={addToRefs}>
                    <h3>プロフィール</h3>
                    <ul>
                        <li>出身地：香川県</li>
                        <li>職業：フロントエンジニア</li>
                        <li>得意技術：React、Laravel、<br></br>Webサイト開発/アプリケーション開発</li>
                        <li>趣味：ゲーム、プログラミング</li>
                    </ul>
                    <h3>自分とサイトについて</h3>
                    <p>はじめまして、I.Oと申します。好きなゲームはハクスラ系、オープンワールド、ARPGとかです。インディーゲームもやります。</p>
                    <p>職場ではフロントエンジニアとして働いており、現在Webアプリケーションやサイトを作成したりしています。</p>
                    <p>このサイトでは自身の制作物や技術等を発信していけたらなーと思っています。拙い出来かもしれませんが大目に見てください。</p>
                </div>
            </div>
            <div className="intro-img">
                <img src="./img/profile.jpg" alt="自己紹介" />
            </div>
        </div>
    </div>
    )
}
export { Introduction } ;