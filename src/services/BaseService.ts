interface Options {
    method?:'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: BodyInit,
    headers?: HeadersInit,
}
interface RequestProps extends Options {
    baseUrl?:string;
    path: string;
}

export class BaseService {
    // get, post, put, delete

    get({path}:RequestProps){

        return this.httpRequest({
            path,
            method: 'GET'
        });
    }

    post({path, body}:RequestProps){
        return this.httpRequest({
            path,
            body,
            method: 'POST',
            headers: {
                ["Content-Type"]: "application/json"
            }
        })
    }

    async httpRequest({
        baseUrl='http://localhost:3000/api/',
        path,
        method='GET',
        body,
        headers,
    }:RequestProps){

        const options:Options = {
            method
        };
        const _headers = new Headers(headers);
        

        if(method === 'POST' || method === 'PUT'){
            options.body = body ?? undefined;
            if(!_headers.has("Content-Type")){
                _headers.append("Content-Type", "application/json");
            }
        }
        options.headers = _headers;

        try{
            
            const response = await fetch(baseUrl + path, options);

            if(response.ok){
                const data = await response.json();
                return data;
            }

            if(response.status === 500){
                throw new Error('Invalid request');
            }

            
        }catch(error){
            console.log('Base Service Error:' + error);
            throw new Error('Invalid request');
        }
    }
}