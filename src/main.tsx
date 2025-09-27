import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { UserList } from './components/UserList.tsx'
import {User} from './components/User.tsx'
import {CreateUser} from './components/CreateUser.tsx'
import {Login} from './components/Login.tsx'
import {ProtectedRoute} from './components/ProtectedRoute.tsx'
import { UserProvider } from './providers/UserProvider.tsx'
import {useUser} from './providers/UserProvider.tsx'
import { Provider } from 'react-redux';
import store from './store.ts'

const UserEdit = () => <>UserEdit</>;
const NotFound = () => <>NotFound</>;


// eslint-disable-next-line react-refresh/only-export-components
const RootRouter = () => {

    const userContext = useUser();
    console.log('userContext', userContext);
    return (
        <StrictMode>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route element={<ProtectedRoute isAuthenticated={userContext?.isAuthenticated ?? false} />}>
                        <Route path='/' element={<App />}>
                            <Route path='users'>
                                <Route index={true} element={<UserList />} />
                                <Route path=':id' element={<User />} />
                                <Route path='create' element={<CreateUser />} />
                                <Route path=':id/edit' element={<UserEdit />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Route>
                    
                </Routes>
        </StrictMode>
    )

}

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <UserProvider>
            <Provider store={store}>
                <RootRouter />
            </Provider>
        </UserProvider>
    </BrowserRouter>
)
