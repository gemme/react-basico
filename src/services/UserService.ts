import { BaseService } from "./BaseService";
import {data} from '../data/users-data';
import type { PageUser } from "../types/user";

export class UserService extends BaseService{


    getUsers(): Promise<PageUser>{
        //return Promise.resolve(data);//fetch(url + path)
        return this.get({path: 'users'})
    }
}