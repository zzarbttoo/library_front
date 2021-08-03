import CenterBox from './CenterBox';
import Main from './Main';
import styled from 'styled-components';
import FormInput from './FormInput';
import Button from './Button'
import {useState} from 'react';
import LoginApi from '../api/LoginApi';


const submitFunc = async(e) =>{


    e.preventDefault();
    //TODO : validate Check
    //email 형식 체크 
    //password 형식 체크 


    console.log(e.target.user_email.value);
    console.log(e.target.user_password.value);

}

//TODO : validate check func

function LoginForm(){

const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <Main>
            <CenterBox>
                <StyledH2>Hello World~</StyledH2>
                <form onSubmit = {submitFunc}>
                <FormInput id = "user_email" label = "user_email " placeholder = "email" autoFocus/>
                <StyledBlankWrapper>
                <FormInput id = "user_password" label = "user_password" placeholder = "password" type = "password"/>
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