import axios from 'axios';


class LoginApi{


    //TODO : url secret file로 빼기
    constructor(){
        this.userApiClient = axios.create({
            baseURL : 'localhost:3000/users',
            timeout : 1000
        });
    }

    async sign_in(user_id, user_email){

        console.log(user_id);
        console.log(user_email);

        //const response = await this.userApiClient.post('/sign_in');
        //console.log(response);


    }

    async sign_up(){

    }

    async sign_out(){

    }




}

export default LoginApi;