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
    const onIdChange = (e) => {

        setId(e.target.value);
        setErrorMsg(null);

    }
    
    const onPasswordChange = (e) =>{
        setPassword(e.target.value);
        setErrorMsg(null);
    }

    const isValidate = () => {

        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (!id){
            setErrorMsg('아이디를 입력해주세요');
            return false;
        }else if(!password){
            setErrorMsg('비밀번호를 입력해주세요');
            return false;
        }else if(id.match(emailRegExp) == null){
            setErrorMsg('아이디는 이메일 형식입니다');
            return false;
       }else return true;

    }
    
    const submitFunc = async(e) =>{

        //TODO : validate Check
        //email 형식 체크 
        //password 형식 체크 

        

        e.preventDefault();

        if (!isValidate()) return;
        
        const isSuccess = await execute(loginApi.sign_in({'user_email' : id, 'user_password' : password}));

        if (isSuccess) history.push('/user');

    }

    //state가 바뀔 때 실행된다 
    useUpdateEffect(() => {

        if (state.error) {
            setErrorMsg(state.error.data);
        }
        
    }, [state]);

    return (
        <Main>
            <CenterBox> 
                <StyledH2>Hello World~</StyledH2>
                <form onSubmit = {submitFunc}>
                <FormInput onChange = {onIdChange} id = "user_email" label = "user_email " placeholder = "email" autoFocus/>
                <StyledBlankWrapper>
                <FormInput onChange = {onPasswordChange} id = "user_password" label = "user_password" placeholder = "password" type = "password"/>
                </StyledBlankWrapper>
                {errorMsg && <StyledErrorMsg>{errorMsg}</StyledErrorMsg>}
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

const StyledErrorMsg = styled.div`
    text-align : center;
    margin-top : -8px;
    margin-bottom : 16px;
    font-size : 13px;
`

const StyledBlankWrapper = styled.div`
    position: relative;
    margin : 20px 0
`


export default LoginForm;