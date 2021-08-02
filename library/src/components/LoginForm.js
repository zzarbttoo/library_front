import CenterBox from './CenterBox';
import Main from './Main';
import styled from 'styled-components';
import FormInput from './FormInput';
import Button from './Button'


const submitFunc = async(e) =>{

    console.log('helloworld');
}

function LoginForm(){

    return (
        <Main>
            <CenterBox>
                <StyledH2>Hello World~</StyledH2>
                <form onSubmit = {submitFunc}>
                
                <FormInput></FormInput>
                <StyledBlankWrapper>
                <FormInput></FormInput>
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