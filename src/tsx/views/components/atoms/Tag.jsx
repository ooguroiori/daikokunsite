import React from 'react';
import "../../../styles/Tag.scss";

// タグコンポーネント
const Tag = ({ text }) => {
    return (
        <div className="tag">
            <span>{text}</span>
        </div>
    );
};

export default Tag;