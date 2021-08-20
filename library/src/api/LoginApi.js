import { ControlCameraOutlined } from '@material-ui/icons';
import axios from 'axios';


class LoginApi{

    //TODO : url secret file로 빼기
    constructor(){

        this.apiClient = axios.create({
        baseURL : 'http://localhost:3000/api',
        timeout : 1000,
        });

    }

    sign_in = async(...args) => {


        const response = await this.apiClient.post('/users/sign_in', args[0]).then(
        (context) => {
            console.log(context);
        }

        );
        //console.log('sign_in response ::: ' + JSON.stringify(response));

        // await this.apiClient.post('/users/sign_in', args[0]).then(
        //     response =>{
        //         console.log(response);
        //         return response.data;
        //     }, error => {
        //         console.log(error.response);
        //         return error.data;
        //     }
        // );



    }

    sign_up = async () => {

    }

    sign_out = async() => {

    }




}

export default LoginApi;