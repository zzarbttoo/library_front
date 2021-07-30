import React from 'react';
import styled from 'styled-components';


function CenterBox({ children }) {
    return (
      <StyledWrapper>
        <div>{children}</div>
      </StyledWrapper>
    );
  }
  
  const StyledWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    width: 460px;
    max-width: 90%;
    padding: 50px 0;
    border-radius: 12px;
    background: ${({theme}) => theme.color.white}
    background-color: ${({theme}) => theme.color.white}
    
    & > div {
      width: 73%;
      text-align: center;
    }

  `;


export default CenterBox;