// ((deleted part of project)) 
// import React, { useContext,useState } from 'react';
// import './EmojiSearch.scss';
// import ThemeContext from '../../contexts/ThemeContext';
// import emojiList from '../../configs/emojiList.json'

// const EmojiSearch = () =>
// {
//     const [inputvalue, setInputvalue] = useState('');
//     const [emojisearchResult, setEmojiSearchResult] = useState([]);
//     const themeValues = useContext(ThemeContext);
//     const [maxLength, setMaxLength] = useState(10);
//     const btnClicked = (searchValue,MaxLen) =>
//     {
//         setEmojiSearchResult(emojiList.filter(emoji => {if (emoji.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) return true;
//             if(emoji.keywords.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) return true; return false}).slice(0,maxLength));
//     }
//     return(
//         <div style={{backgroundColor: themeValues.theme.backColor, color: themeValues.theme.foreColor}} className="emoji">
//             <p className="emoji__title">Search your emoji !</p>
//             <input onChange={(event) => setInputvalue(event.target.value)} type="text" className="emoji__input"/>
//             <p className="emoji__title">Set Max Length</p>
//             <input onChange={(event) => setMaxLength(event.target.value)} type="number" className="emoji__input" max={30} min={1} onKeyPress={(e) => {e.preventDefault()}}/>
//             <button onClick={() => btnClicked(inputvalue,maxLength)} className="emoji__btn">SEARCH</button>
//             {emojisearchResult.map(item => 
//                 (
//                     <h2 className="emoji__response">{item.symbol}</h2>
//                 ))}
//         </div>
//     );
// }

// export default EmojiSearch;

// ((deleted part of project)) 