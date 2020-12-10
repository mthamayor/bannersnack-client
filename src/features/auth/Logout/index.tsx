import React from 'react';
import { useEffect } from 'react';
import storage from '../../../lib/storage';

export const Logout = () => {
    useEffect(()=>{
        storage.removeUser();
        window.location.replace('/login');
    });

    return (<></>)
};

export default Logout;