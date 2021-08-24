import axios from 'axios';


class LoginApi{

    //TODO : url secret file로 빼기
    constructor(){

        this.apiClient = axios.create({
        baseURL : 'http://localhost:3000/api',
        timeout : 2000,
        });

    }

    sign_in = async (...args) => {

        let return_value = '';

        try {
            const response = await this.apiClient.post('/users/sign_in', args[0]);
            return_value = response;

        }catch(error){
            return_value = error.response;
            throw return_value;
        }

        return return_value;
 
    };

    // sign_up = async () => {

    // };

    // sign_out = async() => {

    // };




}

export default LoginApi;