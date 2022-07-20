import React,{ useState, useCallback,useEffect, useContext, useMemo } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Blog.scss';
import { Link } from 'react-router-dom';
import PostPlaceHolder from '../PostPlaceHolder/PostPlaceHolder'
import 'bootstrap/dist/js/bootstrap';

const Blog = () =>
{
    const [posts,setPosts] = useState([])
    const [pageCounts,setPageCounts] = useState(0)
    const [activePageNumber,setActivePageNumber] = useState(1)

    const loadPosts = async () =>
    {
        const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const myPosts = await responsePosts.json();
        await setPosts(myPosts);
    }

    useEffect(() =>
    {
        loadPosts();
    },[])

    const calculatePageCount = useMemo(() =>
    {
        if(posts.length % 10 > 0)
        {
            return parseInt(posts.length / 10 + 1);
        }
        return parseInt(posts.length / 10);
    },[posts])

    useEffect(() =>
    {
        setPageCounts(calculatePageCount);
    },[posts,calculatePageCount])

    const handlePageClick = useCallback((pageNum) =>
    {
        setActivePageNumber(pageNum);
    },[])

    const themeValues = useContext(ThemeContext);

    return(
        <div style={{
            backgroundColor: themeValues.theme.backColor,
            color: themeValues.theme.foreColor,
        }} className="blog">
            {posts.length === 0 && <PostPlaceHolder/>}
            {posts.length > 0 && 
            <div>
                <ul className="blog__post">
                    {posts.slice(10 * (activePageNumber-1), 10 * activePageNumber).map(post => 
                        (
                                    <li className="blog__post--item" key={`post-${post.id}`}>
                                        <Link style={{textDecoration: 'none',color: themeValues.theme.foreColor}} to={`/post/${post.id}`}>
                                            <h3>{post.title}</h3>
                                            <p>{post.body}</p>
                                        </Link>
                                    </li>
                        ))}
                </ul>
            </div>}
            <>
                <ul className="blog__btnContainer">
                    {new Array(pageCounts).fill(0).map((item, index) =>
                    (
                        <li key={index} className="blog__btnContainer__li">
                            <button className={activePageNumber === index + 1 ? 'blog__btnContainer__li--active' : 'blog__btnContainer__li--normal'} type="button" onClick={() => handlePageClick(index+1)}>{index+1}</button>
                        </li>
                    ))}
                </ul>
            </>
        </div>
    )
};

export default Blog;
