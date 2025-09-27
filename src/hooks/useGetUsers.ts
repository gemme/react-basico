
import {useState, useEffect} from 'react';
import {UserService} from '../services/UserService';
import type {User} from '../types/user';

export const useGetUsers = () => {
        const [users, setUsers] = useState<User[]>([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');

        async function getUsers(){
            const user = new UserService();
            setLoading(true);
            try{
                const pageUser = await user.getUsers()
                setUsers(pageUser.users);
            }catch(error){
                console.log(error);
                if(error instanceof Error){
                    setError(error.message);
                }
                setError('Failed loading...');
            } finally{
                setLoading(false);
            }
            
        }
    
        // getUsers();
        useEffect(() => {
            getUsers();
        }, [/* no dependecies / mounting */]);

        return {
            users,
            loading,
            error
        }

}