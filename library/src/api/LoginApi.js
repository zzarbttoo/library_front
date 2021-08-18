import axios from 'axios';


class LoginApi{

    //TODO : url secret file로 빼기
    constructor(){
        this.apiClient = axios.create({
        baseURL : 'http://localhost:3000/api',
        timeout : 1000,
        });
    }

    async sign_in(...args){

        const response = await this.apiClient.post('/users/sign_in', ...args);
        return response.data;

    }

    async sign_up(){

    }

    async sign_out(){

    }




}

export default LoginApi;