import axios from 'axios';


class LoginApi{

    //TODO : url secret file로 빼기

    constructor(){
        this.apiClient = axios.create({
        baseURL : 'http://localhost:3000/api',
        timeout : 1000,
        });

        console.log('render time ::: ' + this.apiClient);
    }

    async sign_in(...args){

        //console.log('args ::: ' + JSON.stringify(args));
        //console.log('this.apiClient :: ' + this.apiClient);
        await this.apiClient.post('/users/sign_in', args[0]).then(
            response =>{
                console.log(response);
                return response;
            }, error => {
                console.log(error.response);
            }

        );


        // const response = await this.apiClient.get('/');
        // console.log(response.data);

        

    }

    async sign_up(){

    }

    async sign_out(){

    }




}

export default LoginApi;