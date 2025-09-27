import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { useGetUsers } from '../hooks/useGetUsers';
import { useDispatch } from 'react-redux';

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'username', headerName: 'User Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'dob', headerName: 'Date of birth', width: 200 },
];


export const UserList = () =>  {
    const navigate = useNavigate();
    const {users, loading, error} = useGetUsers();
    const dispatch = useDispatch();

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
        <div style={{ height: 500, width: '80%', padding: '40px' }}>
            <Button onClick={()=> {
                navigate('create');
            }} variant="contained">Create User</Button>
             <Button onClick={()=> {
               dispatch({
                type: 'INCREMENT_COUNT'
               });
            }} variant="contained">Increment</Button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 500, width: '100%', marginTop: '20px' }}>
                {renderContent()}
            </div>
        </div>
        </>);
}
