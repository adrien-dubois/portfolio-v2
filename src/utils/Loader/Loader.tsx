import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
to {
      transform: scale(0.8);
      opacity: 0.5;
    }
`;

const LoaderContainer = styled.div`

    color: var(--primary-color);
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 46px;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;

  &:before {
    content: "{";
    display: inline-block;
    animation: ${pulse} 0.4s alternate infinite ease-in-out;
  }
  &:after {
    content: "}";
    display: inline-block;
    animation: ${pulse} 0.4s 0.3s alternate infinite ease-in-out;
  }

      

`;

const Loader = () => {

  return (
      <>
        <LoaderContainer>chargement</LoaderContainer> 
      </>
)
    
  
}

export default Loader