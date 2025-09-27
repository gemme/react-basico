import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLogin} from '../hooks/useLogin';

export const Login = () => {
  const {error, username, setUsername, password, setPassword, login} = useLogin();

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
        justifyContent: 'center',
        width: '100vw',
        height: '100hw'
      }}>
        <h2>Login</h2>

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
        }} onClick={()=> { login()}} variant="contained">Login</Button>
      </div>
        }
      
      </Box>
    )
}