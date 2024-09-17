import React, { useEffect, useRef } from 'react';

const ScrollEffect = (props) => {



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
    <div></div>
    )
}

export { ScrollEffect } ;