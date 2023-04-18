import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

import { useAppDispatch } from '../../actions/hooks';
import { setUsername } from '../../redux/user/userSlice';

const useAuth=()=>{
    const userName=localStorage.getItem('userName');

    const dispatch = useAppDispatch();

    if(userName){
        dispatch(setUsername(userName));
        return true
    } else {
        return false
    }
}


const PrivateRoutes=(props:any) =>{

    const auth=useAuth()

    return auth?<Outlet/>: <Navigate to="/"/>;
}

export {PrivateRoutes};