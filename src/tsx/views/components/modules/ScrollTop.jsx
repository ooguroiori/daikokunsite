import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // スクロール位置を監視するためのエフェクト
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button onClick={handleScrollToTop} className={`TopScrollbtn ${isVisible ? 'visible' : ''}`}>
            <svg className="arrow" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                </svg>
                <p className="TopScrolltext">Back to Top</p>
            </button>
        )
    );
};

export default ScrollTop;
