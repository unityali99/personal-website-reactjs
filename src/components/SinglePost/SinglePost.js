import React, { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import './SinglePost.scss';

const SinglePost = () =>
{
    const themeValues = useContext(ThemeContext);
    const postTitle = useRef();
    const postBody = useRef();
    const fetchAPI = async (id) =>
    {
        try
        {
            const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return await apiResponse.json();
        }
        catch(err)
        {
            console.log(err)
        }
    }
    const { id } = useParams();
    fetchAPI(id).then((post) => 
    {
        postTitle.current.innerHTML = post.title;
        postBody.current.innerHTML = post.body;
    })
    return(
        <div style={{backgroundColor: themeValues.theme.backColor,color: themeValues.theme.foreColor}} className="singlePost">
            <h1 ref={postTitle}> </h1>
            <p ref={postBody}> </p>
        </div>
    )
}

export default SinglePost;