import React, { useContext, useEffect, useRef } from 'react';
import './Header.scss';
import Image from './Pics/emam_hosein525_2.jpg';
import ThemeContext from '../../contexts/ThemeContext';

const Header = () => 
{
    const headerImage = useRef(null);

    useEffect(() =>
    {
        headerImage.current.classList.add('head__visibleImg')
    },[]);

    const themeValues = useContext(ThemeContext);
return(
    <header style={{backgroundColor: themeValues.theme.backColor, color: themeValues.theme.foreColor}} className="head">
        <img alt="Welcome" ref={headerImage} className="head__invisibleImg" src={Image}/>
    </header>
);
}

export default Header;