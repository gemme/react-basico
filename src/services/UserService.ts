import { BaseService } from "./BaseService";
import type { PageUser, User } from "../types/user";

export class UserService extends BaseService{


    getUsers(): Promise<PageUser>{
        return this.get({path: 'users'})
    }

    getUserById(id:string): Promise<User>{
        return this.get({path:'users'+'/'+ id})
    }

    createUser(user: User){
        return this.post({path:'users', body: JSON.stringify(user)});
    }
}