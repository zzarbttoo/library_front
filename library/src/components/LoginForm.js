import CenterBox from './CenterBox';
import Main from './Main';
import styled from 'styled-components';
import FormInput from './FormInput';
import Button from './Button'
import React, {useState} from 'react';
import LoginApi from '../api/LoginApi';
import { useUpdateEffect } from 'react-use';
import { useHistory } from 'react-router-dom';
import useAsync from '../hook/useAsync';



//TODO : validate check func

function LoginForm(){

    const loginApi = new LoginApi();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const history = useHistory();


    const [state, execute] = useAsync(loginApi.sign_in, false);
    //console.log(state);
    const {loading, data, error} =state;
    //console.log(loading, data, error);


    //console.log(useAsync(LoginApi.sign_in));
    //console.log(loginState);
    //const {loading, data, error} = loginState;


    const onIdChange = (e) => {

        //console.log(e.target.value);
        setId(e.target.value);
    
    }
    
    const onPasswordChange = (e) =>{
        //console.log(e.target.value);  
        setPassword(e.target.value);
    
    }
    
    const submitFunc = async(e) =>{

        e.preventDefault();
        
        //console.log(loginApi.sign_in({'user_email' : id, 'user_password' : password}));
        await execute(loginApi.sign_in({'user_email' : id, 'user_password' : password}));
        //execute();
 

        //TODO : validate Check
        //email 형식 체크 
        //password 형식 체크 

        
    
    
        //console.log(e.target.user_email.value);
        //console.log(e.target.user_password.value);

        

        // const isLoginSuccess = loginApi.sign_in(id, password);

        // console.log(isLoginSuccess);

        // if (isLoginSuccess) history.pushState('/user');



        //console.log(loginState);
        //console.log(loading);
        //console.log(await loading({id, password}));
    
    }

    //state가 바뀔 때 실행된다 
    useUpdateEffect(() => {
        //console.log("hello");

    });

    return (
        <Main>
            <CenterBox> 
                <StyledH2>Hello World~</StyledH2>
                <form onSubmit = {submitFunc}>
                <FormInput onChange = {onIdChange} id = "user_email" label = "user_email " placeholder = "email" autoFocus/>
                <StyledBlankWrapper>
                <FormInput onChange = {onPasswordChange} id = "user_password" label = "user_password" placeholder = "password" type = "password"/>
                </StyledBlankWrapper>
                <Button>Login</Button>
                </form>
            </CenterBox>
        </Main>
    );
}

const StyledH2 = styled.h2`
    text-align : center;
    margin-bottom : 30px;
    font-size : 30px;
    font-weight : 800;
    color : ${({theme}) => theme.color.darkGray}

`;

const StyledBlankWrapper = styled.div`
    position: relative;
    margin : 20px 0
`


export default LoginForm;