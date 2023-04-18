import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../actions/hooks'
import { setUsername } from '../../redux/user/userSlice'

import './signUp.scss'

const SignUp=() =>{
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        dispatch(setUsername(userName));
        navigate("/home");
    }

    return (
        <div className='signUpContainer'>
            <div className='signUp'>
                <h1 className='signUp__welcomeMessage'>Welcome to CodeLeap network!</h1>
                
                <label className='signUp__labelInput'>
                    <div className='signUp__helpText'>Please enter your username</div>
                  
                    <input className='signUp__input'
                           placeholder='John doe'
                           type='text'
                           onChange={(e)=>setUserName(e.target.value)}
                           />

                </label>
                

                <button className='signUp__button'
                        onClick={handleClick}
                        disabled={userName===''}>
                    ENTER
                </button>
            </div>
        </div>
    );
}

export {SignUp};