interface RequestProps {
    baseUrl?:string;
    path:string;
}
export class BaseService {
    // get, post, put, delete

    get({
        baseUrl='http://localhost:3000/api/',
        path
    }:RequestProps){
        return fetch(baseUrl+path+'?limit=150', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        })
    }

}