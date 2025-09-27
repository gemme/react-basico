
import Box from '@mui/material/Box';
import './App.css'
import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useSelector } from 'react-redux';
//import InboxIcon from '@mui/icons-material/Inbox';
//import DraftsIcon from '@mui/icons-material/Drafts';

function App(){
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [title, setTitle] = useState('Dashboard');
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.count)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    if ((event.target as HTMLElement).innerText === 'Dashboard') {
      setTitle('Dashboard');
      navigate('/');
    }
    if ((event.target as HTMLElement).innerText === 'Users') {
      setTitle('Users');
      navigate('/users');
    }
  };
  
  const renderContent =() => {
    return (
     
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
        backgroundColor: 'lightgrey',
      }}>
        <div style={{
          width: '200px',
          height: '100%',
          backgroundColor: 'white',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          padding: '20px',
          margin: '0',
          borderRight: '1px solid lightgrey',
        }}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              {/* <InboxIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              {/* <DraftsIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
      </div>

    

      <div style={{
          width: 'calc(100% - 200px)',
          backgroundColor: 'white',
          height: '100%',
        }}>
          <div style={{
            width: '100%',
            height: '60px',
            boxSizing: 'border-box',
            padding: '0 20px',
            margin: '0',
            borderBottom: '1px solid lightgrey',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
          }}>
            {title} Counter is : {count}
          </div>
          <main>
            <Outlet />  
          </main>
        </div>
        </div>     
    )
  }

  return renderContent();
}

export default App
