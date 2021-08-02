import React from 'react';
import styled from 'styled-components'

function Main({children}){

    return <StyledMain>{children}</StyledMain>

}


const StyledMain = styled.main`
  min-height: 100vh;
  background: ${({theme}) => theme.color.background_blue};  
  background: -webkit-linear-gradient(to right, ${({theme}) => theme.color.background_pink}, ${({theme}) => theme.color.background_blue});  
  background: linear-gradient(to right, ${({theme}) => theme.color.backgournd_pink}, ${({theme}) => theme.color.background_blue}); 
`;

export default Main;