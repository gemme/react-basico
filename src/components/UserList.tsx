

/*
    const UserList2 = function (){

        return(
            <div></div>
        )
    }
*/
import React,{useState, useEffect} from 'react';
import type {User} from '../types/user';

export  const UserList = () =>  {

    const [users, setUsers] = useState<User[]>([]);

    async function getUsers(){
        const response = await fetch('http://localhost:3000/api/users', {
            method: "GET",
        });
        const result = await response.json();
        setUsers(result);
    }
    // getUsers();
    useEffect(() => {
        getUsers();
    }, [])
    
    return (
        <div>
            <ul >
            {users.map((user) => {
                return (
                    <div key={user._id}>
                        <li>{user.username}</li>
                        <li>{user.name}</li>
                        <li>{user.dob}</li>
                        <li>{user.email}</li>
                    </div>
                )
            })}
            </ul>
        </div>
    );
}
