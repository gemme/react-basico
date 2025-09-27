import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react';
import { UserService } from '../services/UserService';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';

export const CreateUser = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createUser = async () =>{
        try{
            const userService  = new UserService();
            const result = await userService.createUser({
                name,
                dob,
                email,
                username,
                password
            });
            console.log(result);
            navigate('/users');
        }catch(error){
            if(error instanceof Error){
                console.log(error.message);
                setError(error.message);
                return;
            }
            setError('Error while creating user!');
        }
       
    }


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
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}>
        <h2>Create User</h2>
        <Button onClick={()=> {
               dispatch({
                type: 'DECREMENT_COUNT'
               });
            }} variant="contained">Decrement</Button>
        <TextField
          id="outlined-required"
          defaultValue={name}
          placeholder='Name'
          onChange={(event) => {
            setName(event.target.value);
          }}
          type='text'
        />
        <TextField
          id="outlined-required"
            defaultValue={dob}
            placeholder='Date Of Birth'
            onChange={(event) => {
                setDob(event.target.value);
            }}
            type='date'
        />
        <TextField
          id="outlined-required"
          defaultValue={email}
            placeholder='Email'
            onChange={(event) => {
                setEmail(event.target.value);
            }}
            type='email'
        />
        <TextField
          id="outlined-required"
          defaultValue={username}
            placeholder='User name'
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            type='text'
        />
        <TextField
          id="outlined-required"
          defaultValue={password}
            placeholder='Password'
            onChange={(event) => {
                setPassword(event.target.value);
            }}
            type='password'
        />
            
        <Button style={{
            width: '250px',
        }} onClick={()=> { createUser()}} variant="contained">Submit</Button>
      </div>
        }
      
      </Box>
    )
}