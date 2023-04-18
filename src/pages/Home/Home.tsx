import React, { useState,ChangeEvent } from 'react'

import Card from '../../components/Card'
import './home.scss'

const post1 =  {
    "id": 6846,
    "username": "nvncnv",
    "created_datetime": "2023-04-17T02:18:32.880277Z",
    "title": "vv",
    "content": "vv"
}


const post2 =  {
    "id": 6846,
    "username": "Victor",
    "created_datetime": "2023-04-17T02:18:32.880277Z",
    "title": "My First Post at CodeLeap Network!",
    "content": `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

    Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`
}

const Home=() =>{
    const [userName, setUserName] = useState('');
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
                    <Card {...post1}/>
                    <Card {...post2}/>
                </div>
            </div>

        </div>
    );
}

export {Home};