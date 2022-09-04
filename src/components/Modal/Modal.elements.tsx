import { MdClose } from 'react-icons/md';
import styled from 'styled-components'

export const Background = styled.div`

`;

export const ModalWrapper = styled.div<{showModal: boolean}>`

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