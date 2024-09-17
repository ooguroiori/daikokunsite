import React from 'react';
import { Link } from "react-router-dom";
import '../../../styles/logo.scss';

const Logo = (props) => {
    return (
    <div className='logo'>
        <Link to="/"><img src="./img/logo_clear.png" alt="I.Oのゲーム部屋" /></Link>
    </div>
    )
}
export { Logo } ;