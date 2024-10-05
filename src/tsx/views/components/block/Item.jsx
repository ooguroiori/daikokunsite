import React, { useEffect, useRef } from 'react';
import "../../../styles/Item.scss";

const Item = () => {
    // アイテムデータの配列
    const items = [
        { id: 1, title: 'ホヨバの犬', description: '原神、崩壊スターレイルの育成素材の必要数を表示できるツールです。\n\nNetlifyというツールを使用して公開しています。', image: '/img/hoyodog.jpg', link: "https://hoyoverse-pet.netlify.app/" },
        { id: 2, title: 'Coming Soon...', description: '鋭意制作中', image: '/img/Comingsoon.jpg', link: "#" }
    ];

    const itemsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            const offset = 100;

            itemsRef.current.forEach(item => {
                if (item) {
                    const itemTop = item.getBoundingClientRect().top + scrollPos;
                    if (scrollPos > itemTop - windowHeight + offset) {
                        item.classList.add('visible');
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

    return (
        <div className="item-container">
            {items.map((item, index) => (
                <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
                    <div
                        className={`animated-item item-${index + 1}`}
                        ref={el => itemsRef.current[index] = el}
                    >
                        <img src={item.image} alt={item.title} />
                        <div className="item-details">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export { Item };
