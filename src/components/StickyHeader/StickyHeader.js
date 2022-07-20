import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import './StickyHeader.scss';

const StickyHeader = () =>
{
const themeValues = useContext(ThemeContext);
const { pathname } = useLocation(); 
let title = '';
let text = '';
switch (pathname) 
{
    case '/':
        title = 'هییٔت عاشقان حضرت حسین (ع) تقدیم میکند';
        text = 'برگزاری مراسمات عزاداری حسینی';
        break;

    case '/blog':
        title = 'بلاگ هیییٔت';
        break;

    case '/contact-US':
        title = 'تماس با هییٔت';
        break;

    case '/about-US':
        title = 'درباره هییٔت عاشقان حضرت حسین (ع)';
        break;

    default:
        break;
}

if(pathname.includes('/post/'))
{
    title = 'پست'
}

return(
    <div style={{backgroundColor: themeValues.theme.backColor, color: themeValues.theme.foreColor}} className="stickyHead">
        <h1 className="stickyHead__title">{title}</h1>
        <p className="stickyHead__text">{text}</p>
    </div>
);
}
export default StickyHeader;