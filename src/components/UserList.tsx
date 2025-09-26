

/*
    const UserList2 = function (){

        return(
            <div></div>
        )
    }
*/
import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import {useState, useEffect} from 'react';
import type { User} from '../types/user';
import { UserService } from '../services/UserService';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'username', headerName: 'User Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'dob', headerName: 'Date of birth', width: 300 },
];


export const UserList = () =>  {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // getUsers();
    useEffect(() => {
    const user = new UserService();
    async function getUsers(){
        setLoading(true);
        try{
            /*
            const response = await fetch('http://localhost:3000/api/users', {
                method: "GET",
                signal: controller.signal
            });
            const result = await response.json();
            console.log('fetch users');
            */
            /*
                {
                    "users": [],
                    "pagination":{}
                }
            */
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

        getUsers();
    
    }, [/* no dependecies / mounting */]);


    const renderContent = () => {
        if(loading){
            return <span>Loading...</span>
        }
        if(error){
            return <span>{error}</span> 
        }
        if(users.length === 0){
            return <span>No users found</span>
        }
        if(users.length > 0){
            return (
                    <DataGrid getRowId={(row) => row._id} rows={users} columns={columns} />
            )
        }
        return null;
    }
    
    return (
        <>
        <div style={{ height: 300, width: '100%' }}>
            <Button onClick={()=> {
                navigate('create');
            }} variant="contained">Create User</Button>
            {renderContent()}
        </div>
        </>);
}
