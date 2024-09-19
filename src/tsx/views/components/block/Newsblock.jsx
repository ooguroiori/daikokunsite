import React, { useEffect, useRef } from 'react';
import "../../../styles/Newsblock.scss";
import Tag from "../atoms/Tag.jsx";
import json from "../../../../assets/data/news.json";

const Newsblock = (props) => {
    
    const newsData = json;

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
        <div className='newsdiv'>
            {/* JSONデータを基にループ */}
            {newsData.map((newsItem, index) => (
                <div key={index} className={`newscard item-${index + 1}`}
                        ref={el => itemsRef.current[index] = el}>
                    <img src={newsItem.img} alt={newsItem.title} />
                    <div className="newsdetail">
                        <h2>{newsItem.title}</h2>
                        <p className="date">{newsItem.date}</p>
                        <p>{newsItem.content}</p>
                        <div className="tags">
                            {newsItem.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} text={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export { Newsblock } ;