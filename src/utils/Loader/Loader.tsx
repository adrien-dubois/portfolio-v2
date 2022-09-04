import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

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

    @media screen and (max-width: 1200px) {
      font-size: 25px;
    }

  &:before {
    content: "{";
    display: inline-block;
    color: #FFF;
    animation: ${pulse} 0.4s alternate infinite ease-in-out;
  }
  &:after {
    content: "}";
    display: inline-block;
    color: #FFF;
    animation: ${pulse} 0.4s 0.3s alternate infinite ease-in-out;
  }

      

`;

const Loader = () => {
  const { t } = useTranslation();
  return (
      <>
        <LoaderContainer>{t('Loader')}</LoaderContainer> 
      </>
)
    
  
}

export default Loader