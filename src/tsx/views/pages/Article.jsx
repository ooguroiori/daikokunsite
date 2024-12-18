import React from 'react'
import { Header } from '../components/block/Header';
import { Newsblock } from '../components/block/Newsblock'; 
import  ScrollTop  from "../components/modules/ScrollTop";
import "../../styles/Heading.scss";

export const Article = () => {
    return (
    <div>
        <Header />
        <ScrollTop />
        <h2 className="heading">記事</h2>
        <h3 className='subtxt'>quitaや他サイトで投稿した記事を紹介します。</h3>
        <Newsblock />
    </div>
    );
};

export default Article;