import React from 'react';
import styled from 'styled-components'

function Main({children}){

    return <StyledMain>{children}</StyledMain>

}


const StyledMain = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.softGeay};
`;

export default Main;