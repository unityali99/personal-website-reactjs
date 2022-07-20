import React, { useContext } from 'react';
import './Home.scss';
import ThemeContext from '../../contexts/ThemeContext';
import SlideShow from "../Carousel/Carousel";

const Home = () =>
{
const themeValues = useContext(ThemeContext);
return(
    <div style={
        {
            backgroundColor: themeValues.theme.backColor,
            color: themeValues.theme.foreColor,
        }}>
        <div className="py-5">
            <SlideShow/>
        </div>

        <div className="home">
            <p className="home__title">(مشهد) کربلایی وحید شکری</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hyMupSC00l8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="home">
            <p className="home__title">(تهران) محمد حسین پویانفر</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-Uyell2fi_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="home">
            <p className="home__title">(تهران) حاج مهدی رسولی</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S5qooGzK524" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="home">
            <p className="home__title">(کاشان) محمود عیدانیان</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PMsw9BpdK7Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        
    </div>
);
}

export default Home;