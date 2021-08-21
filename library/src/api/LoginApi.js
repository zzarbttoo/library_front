import { ControlCameraOutlined } from '@material-ui/icons';
import axios from 'axios';


class LoginApi{

    //TODO : url secret file로 빼기
    constructor(){

        this.apiClient = axios.create({
        baseURL : 'http://localhost:3000/api',
        });

    }

    sign_in = async(...args) => {


        await this.apiClient.post('/users/sign_in', args[0])
        .then(response => {
            console.log(response);
            return response;
        }).catch(error => {

            //console.log('sign_in error ::: ' + JSON.stringify(error.response));
            //console.log(error.response);
            console.log(error.response.data);
        })
        
    }

    sign_up = async () => {

    }

    sign_out = async() => {

    }




}

export default LoginApi;