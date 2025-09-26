import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import type {User as UserType} from '../types/user';
import {useEffect, useState} from 'react';
import { UserService } from '../services/UserService';
import { useParams } from "react-router";

export const User = () => {
    const params = useParams();
    const [user, setUser] = useState<UserType | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if(params.id){
            const userService = new UserService();
            userService.getUserById(params.id)
                .then((user) => setUser(user))
                .catch(error => {
                    console.log('Component User: '+error.message)
                    setError('Failed retrieving user');
                });
        }
    }, []);


    return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        {error 
        ? <span>{error}</span>
        :
        <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <TextField
          id="outlined-required"
          defaultValue={user?.username}
          disabled
        />
        <TextField
          id="outlined-required"
          defaultValue={user?.name}
          disabled
        /><TextField
          id="outlined-required"
          defaultValue={user?.dob}
          disabled
        /><TextField
          id="outlined-required"
          defaultValue={user?.email}
          disabled
        />
        
      </div>
        }
      
      </Box>
    )
}