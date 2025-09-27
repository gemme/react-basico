import { createContext, useState, useContext } from "react";
import {useAuth} from '../hooks/useAuth';


interface UserContextType {
    token:string;
    setTokenInStorageAndGlobalState: (token:string)=>void; 
    isAuthenticated:boolean;
    username:string;
    setUsername: (username:string)=>void; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}:{children: React.ReactNode}) => {
    const [username, setUsername] = useState('');
    const {
        token,
        setTokenInStorageAndGlobalState,
        isAuthenticated
    } = useAuth('token');

    return(
        <UserContext value={{
            token,
            setTokenInStorageAndGlobalState,
            isAuthenticated,
            username,
            setUsername
        }}>
            {children}
        </UserContext>)
}