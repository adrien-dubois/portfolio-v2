import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const load = keyframes`
    { to{ background-size: 100% 3px; } }
`;

const LoaderContainer = styled.div`

    &:before{
        content: 'Chargement...';
    }

    font-weight: bold;
    font-family: sans-serif;
    font-size: 30px;
    padding-bottom: 8px;
    color: var(--primary-color);
    background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
    animation: ${load} 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

const Loader = () => {

  return (
      <>
        <LoaderContainer/> 
      </>
)
    
  
}

export default Loader