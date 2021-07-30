import CenterBox from './CenterBox';
import Main from './Main';
import styled from 'styled-components';
import FormInput from './FormInput';

function LoginForm(){

    return (
        <Main>
            <CenterBox>
                <StyledH2>Hello World</StyledH2>
                <form>
                    <FormInput></FormInput>
                </form>
            </CenterBox>
        </Main>
    );
}

const StyledH2 = styled.h2`
    text-align : center;
    margin-botton : 30px;
    font-size : 32px;
    font-weight : 800;
    color : ${({theme}) => theme.color.darkGray}

`;



export default LoginForm;