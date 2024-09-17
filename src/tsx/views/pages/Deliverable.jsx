import React from 'react'
import { Header } from '../components/block/Header';
import { Item } from "../components/block/Item";
import "../../styles/Heading.scss";

export const Deliverable = () => {
    return (
    <div>
        <Header />
        <h2 class="heading">制作物</h2>
        <h3 className='subtxt'>これまでに作成したものを表示しているページです。作品をクリックするとページに飛びます</h3>
        <Item />
    </div>
    );
};

export default Deliverable;