import React, { useEffect, useRef } from 'react';
import "../../../styles/Card.scss";

const Cards = (props) => {
    // useRefでアニメーションさせたい要素の参照を管理
    const targetsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const h = window.innerHeight;
            const offset = 100;

            targetsRef.current.forEach((target, index) => {
                if (target) {
                    const pos = target.getBoundingClientRect().top + scroll;
                    if (scroll > pos - h + offset) {
                        // 遅延時間を動的に設定
                        const delay = `${index * 0.2}s`;
                        target.style.animationDelay = delay;

                        target.classList.add('is-animated');
                    }
                }
            });
        };

        // 初回レンダリング時にスクロールイベントリスナーを追加
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 参照を配列に追加するためのコールバック関数
    const addToRefs = (el) => {
        if (el && !targetsRef.current.includes(el)) {
            targetsRef.current.push(el);
        }
    };

    return (
        <div className="cards">
            <div className="card-one" ref={addToRefs}>
                <div className="card-wrap">
                    <div className="card-header one">
                        <i className="fas fa-code"></i>
                        <img src="./img/iroenpitsu_red.png" alt="デザイン" />
                    </div>
                    <div className="card-content">
                        <h1 className="card-title">Design</h1>
                        <p className="card-text">UI/UXを考え要件に沿ったWEBデザイン、LP、バナーなどを作成します。フロー図の作成等も行います。</p>
                        <button className="card-btn one">Figma/Canva</button>
                    </div>
                </div>
            </div>
            <div className="card-two" ref={addToRefs}>
                <div className="card-wrap">
                    <div className="card-header two">
                        <i className="fab fa-css3-alt"></i>
                        <img src="./img/pc_desktop.png" alt="コーディング" />
                    </div>
                    <div className="card-content">
                        <h1 className="card-title">Coding</h1>
                        <p className="card-text">基本FEですが、データベース等のBE業務もこなせます。他の方が見ても理解しやすいコーディングを心掛けています。</p>
                        <button className="card-btn two">HTML/CSS/JS/PHP</button>
                    </div>
                </div>
            </div>
            <div className="card-three" ref={addToRefs}>
                <div className="card-wrap">
                    <div className="card-header three">
                        <i className="fab fa-html5"></i>
                        <img src="./img/seikyusho.png" alt="プランニング" />
                    </div>
                    <div className="card-content">
                        <h1 className="card-title">Planning</h1>
                        <p className="card-text">ワークフローやシーケンス図、システム構成図等を作成して要件定義、機能定義を設計考案することができます。</p>
                        <button className="card-btn three">Excel/draw.io</button>
                    </div>
                </div>
            </div>
            {/* <div class="card-four" ref={addToRefs}>
                <div class="card-wrap">
                    <div class="card-header four">
                        <i class="fab fa-js-square"></i>
                    </div>
                    <div class="card-content">
                        <h1 class="card-title">Title</h1>
                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button class="card-btn four">js</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export { Cards };
