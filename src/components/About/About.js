import React, { useContext } from 'react';
import './About.scss';
import ThemeContext from '../../contexts/ThemeContext';

const About = () =>
{
const themeValues = useContext(ThemeContext);
return(
    <div style={{
        backgroundColor: themeValues.theme.backColor,
        color: themeValues.theme.foreColor,
    }} className="about">
        <h1 className="about__title">بسم رب الحسین (ع)</h1>
        <p className="about__text">برگزاری مراسمات باشکوه عزاداری با نوای مداحان اهل بیت (ع)</p>
        <p className="about__text">جهت هماهنگی های مراسم با شماره زیر تماس حاصل فرمایید</p>
        <p className="about__text">0912123456789</p>
        <p className="about__text">Email: AsheghanHosein@gmail.com</p>
        <p className="about__text">آدرس : مشهد ‌, جنب حرم رضوی</p>
        <p className="about__trademark">Designed By Ali Ahmadi</p>
    </div>
);
}

export default About;   