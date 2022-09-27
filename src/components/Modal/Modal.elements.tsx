import { MdClose } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';

const modal = keyframes`
to {
    transform: scale(1) translate(0%)
}
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.027);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    position: fixed;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
`;

export const ModalWrapper = styled.div<{showModal: boolean}>`
    width: 600px;
    height: 550px;
    background-color: var(--bg-color);
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: var(--white-color);
    position: relative;
    z-index: 999;
    border-radius: 8px;
    transform: translate(-100%);
    transform: scaleY(0);
    animation: ${modal} .5s forwards;
`;

export const ModalContent = styled.div`

`;

export const CloseModalContent = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;