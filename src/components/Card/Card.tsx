import React, { useState,ChangeEvent, useRef,useEffect } from 'react'
import api from '../../actions/api';
import { useAppSelector, useAppDispatch } from '../../actions/hooks';
import { getPosts } from '../../redux/posts/postsSlice';

import { PostInterface } from '../../redux/posts/postsSlice';

import iconDelete from '../../assets/iconDelete.svg';
import iconEdit from '../../assets/iconEdit.svg';

import './cardComponent.scss'



const Card = ({id,username,created_datetime,title,content}:PostInterface) =>{

    const user = useAppSelector((state)=>state.user.username);

    const dispatch = useAppDispatch();

    const [confirmDelete,setConfirmDelete] = useState(false);
    const [confirmEdit,setConfirmEdit] = useState(false);

    const date = new Date(created_datetime);
    const now = new Date();

    const diffMilliseconds = now.getTime() - date.getTime();
    const minutesAgo = Math.round(diffMilliseconds / (1000 * 60));

    const elem = useRef<HTMLTextAreaElement>(null);

    const deletePost = async()=>{
        await api.deletePost(id)
        dispatch(getPosts())
        setConfirmDelete(false)
    }

    const editPost = ()=>{
        dispatch(getPosts())
        setConfirmEdit(false)
    }



    useEffect(() => {
        elem.current?elem.current.style.height = `${elem?.current?.scrollHeight}px`:null;
      }, []);

      return (
          <div className='cardComponent'>
            <h3 className={`cardComponent__title 
                           ${username ===user?'cardComponent__title--userOwner':null}`}>
                {title}
                {username ===user?
                <div className='cardComponent__title__buttons'>
                    <button onClick={()=>setConfirmDelete(true)}><img src={iconDelete}/></button>
                    <button onClick={()=>setConfirmEdit(true)}><img src={iconEdit}/></button>
                    
                </div>
                :null}
            </h3>
            <div className='cardComponent__data'>
                <div className='cardComponent__nameAndDateRow'>
                    <span className='cardComponent__userName'>{`@${username}`}</span>
                    <span className='cardComponent__createdDateTime'>{`${minutesAgo} minutes ago`}</span>
                </div>
                <textarea className='cardComponent__content' readOnly={true} ref={elem} value={content}></textarea>

            </div>

            {confirmDelete?
            <div className='cardComponent__confirmDelete' >

                <div className='cardComponent__confirmDelete__card'>

                    <span className='cardComponent__confirmDelete__question'>
                        Are you sure you want to delete this item?
                    </span>

                    <div className='cardComponent__confirmDelete__buttons'>
                        <button className='cardComponent__confirmDelete__buttonCancel'
                                onClick={()=>setConfirmDelete(false)}>
                            Cancel
                        </button>

                        <button className='cardComponent__confirmDelete__buttonConfirm'
                                onClick={deletePost}>
                            Delete
                        </button>
                    </div>

                </div>                
            </div>
            :null}

            {confirmEdit?
            <div className='cardComponent__confirmEdit' >

                <div className='cardComponent__confirmEdit__card'>

                    <h2 className='cardComponent__confirmEdit__question'>Edit item</h2>

                    <label>
                        <div className='cardComponent__confirmEdit__fieldName'>Title</div>
                        <input className='cardComponent__confirmEdit__titleInput'
                            placeholder='Hello world'
                            defaultValue={title}
                            />
                    </label>

                    <label>
                        <div className='cardComponent__confirmEdit__fieldName'>Content</div>
                        <textarea className='cardComponent__confirmEdit__contentInput'
                                placeholder='Content here'
                                style={{ resize: 'none' }}
                                defaultValue={content}>
                        </textarea>
                    </label>

                    <div className='cardComponent__confirmEdit__buttons'>
                        <button className='cardComponent__confirmEdit__buttonCancel'
                                onClick={()=>setConfirmEdit(false)}>
                                Cancel
                        </button>
                        <button className='cardComponent__confirmEdit__buttonSave'>
                                Save
                        </button>
                    </div>              
                </div>
            </div>
            :null}

       </div>
    );
}

export {Card};