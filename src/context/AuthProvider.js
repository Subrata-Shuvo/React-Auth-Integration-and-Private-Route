import React, { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';

export const AuthConext = createContext();

const AuthProvider = ({children}) => {
    // const {children} = props;
    const allContext = useFirebase()
    return (
        <AuthConext.Provider value={allContext}>
            {children}
        </AuthConext.Provider>
            
        
    );
};

export default AuthProvider;