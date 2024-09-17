import React from 'react';
import "../../../styles/Newsblock.scss";
import Tag from "../atoms/Tag.jsx";
import json from "../../../../assets/data/news.json";

const Newsblock = (props) => {
    const newsData = json;
    return (
        <div>
            {/* JSONデータを基にループ */}
            {newsData.map((newsItem, index) => (
                <div className="newscard" key={index}>
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