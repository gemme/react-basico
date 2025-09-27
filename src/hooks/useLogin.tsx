import {useState} from 'react';
import {useNavigate} from 'react-router';
import {useUser} from '../providers/UserProvider';
import { UserService } from '../services/UserService';

export const useLogin = () => {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const  userContext = useUser();
    const navigate = useNavigate();

    const login = async() => {
        try{
            console.log('login');
            const userService = new UserService();
            const result = await userService.login(username, password);
            console.log(result);
            userContext?.setTokenInStorageAndGlobalState(result.token)
            userContext?.setUsername(username);
            navigate('/');
        }catch(error){
            if(error instanceof Error){
                console.log(error);
                setError(error.message);
                return;
            }

            setError('Failed authenticating user!');
            
        }
        
    }

    return {
        error,
        username,
        setUsername,
        password,
        setPassword,
        login
    }
}