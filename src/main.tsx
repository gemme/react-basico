import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { UserList } from './components/UserList.tsx'
import {User} from './components/User.tsx'
import {CreateUser} from './components/CreateUser.tsx'

const UserEdit = () => <>UserEdit</>;
const NotFound = () => <>NotFound</>;

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='users'>
                        <Route index={true} element={<UserList />} />
                        <Route path=':id' element={<User />} />
                        <Route path='create' element={<CreateUser />} />
                        <Route path=':id/edit' element={<UserEdit />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </StrictMode>
    </BrowserRouter>
    
)
