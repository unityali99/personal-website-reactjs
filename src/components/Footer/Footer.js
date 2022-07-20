import React, { useContext } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import Cookies from 'js-cookie';

const Footer = () =>
{
const themeValues = useContext(ThemeContext);
const handleClickDark = () =>
{
    Cookies.set('theme','dark');
    themeValues.setActiveTheme('dark');
}
const handleClickLight = () =>
{
    Cookies.set('theme','light');
    themeValues.setActiveTheme('light');
}
return(
    <footer className="foot">
        <Link className="foot__item" to="/">خانه</Link>
        <Link className="foot__item" to="/about-us">درباره ما</Link>
        <Link className="foot__item" to="/contact-us">تماس با ما</Link>
        <Link className="foot__item" to="/blog">بلاگ</Link>
        {/* <Link style={{textDecoration: 'none',color: 'black'}} to="/emoji"><a className="foot__item">🕋 ایموجی ها</a></Link> */}
        <div className="foot__theme">
            <button onClick={/*() => themeValues.setActiveTheme('dark')*/handleClickDark} className="foot__theme--dark">Dark Mode</button>
            <button onClick={/*() => themeValues.setActiveTheme('light')*/handleClickLight} className="foot__theme--light">Light Mode</button>
        </div>
    </footer>
);
}

export default Footer;