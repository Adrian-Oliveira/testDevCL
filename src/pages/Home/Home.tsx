import React, { useState,ChangeEvent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../actions/hooks';

import { getPosts } from '../../redux/posts/postsSlice';

import Card from '../../components/Card'
import './home.scss'


const Home=() =>{

    const postList = useAppSelector((state)=>state.posts.postsList)
    const dispatch = useAppDispatch();

    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');



    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value)
    }

    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value)
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    }
    
    useEffect(()=>{
        dispatch(getPosts())

    },[])

    return (
        <div className='homeContainer'>
            <div className='home'>
                <header className='home__header'>CodeLeap Network</header>

                <div className='home__formCreatePost'>

                    <h2 className='home__formCreatePost__question'>What’s on your mind?</h2>

                    <label>
                        <div className='home__formCreatePost__fieldName'>Title</div>
                        <input className='home__formCreatePost__titleInput'
                               placeholder='Hello world'
                               onChange={handleTitleChange}/>
                    </label>

                    <label>
                        <div className='home__formCreatePost__fieldName'>Content</div>
                        <textarea className='home__formCreatePost__contentInput'
                                  placeholder='Content here'
                                  onChange={handleContentChange}
                                  style={{ overflow: 'hidden', resize: 'none' }}>
                        </textarea>
                    </label>

                    <button className='home__formCreatePost__button'
                            disabled={(postContent===''||postTitle==='')}>Create</button>
                </div>

                <div className='home__listPost'>
                    {postList?
                        postList.map((post)=>{
                            return<Card {...post}/>
                        })
                        :null}
                </div>
            </div>

        </div>
    );
}

export {Home};