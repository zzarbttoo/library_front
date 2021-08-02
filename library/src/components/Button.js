import React from 'react';
import styled from 'styled-components';

function Button({children}){
    return (<StyledButton>
        {children}
    </StyledButton>);

}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 3px;
  background : ${({theme}) => theme.color.softBlack}

`
export default Button;