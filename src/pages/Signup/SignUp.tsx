import React, { useState } from 'react'
import './signUp.scss'

const SignUp=() =>{
    const [userName, setUserName] = useState('');

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
                        disabled={userName===''}>
                    ENTER
                </button>
            </div>
        </div>
    );
}

export {SignUp};