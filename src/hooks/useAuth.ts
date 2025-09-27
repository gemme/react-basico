import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';

export const useAuth = (key:string) => {

    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useAuth:token', token);
        if(localStorage.getItem(key)){
            console.log('useAuth:useEffect:localstorage', token);
            const _token = localStorage.getItem(key);
            console.log('useAuth:useEffect:localstorage:_token', _token);
            if(_token){
                setToken(_token);
                setIsAuthenticated(!!_token);
                navigate('/');
            }
        }
    }, [key]);

    const setTokenInStorageAndGlobalState = (token:string) =>{
        setToken(token);
        localStorage.setItem(key, token);
        setIsAuthenticated(!!token);
    }

    return {
        token,
        setTokenInStorageAndGlobalState,
        isAuthenticated
    }
}