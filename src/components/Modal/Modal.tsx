import { MouseEvent, useCallback, useEffect, useRef } from "react"
import { Background, CloseModalContent, ModalContent, ModalWrapper } from './Modal.elements';

interface Project {
    name: string,
    description: string,
    url: string,
    image: string
}

interface ModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    projectDatas: Project
}

const Modal = ({ showModal, setShowModal, projectDatas }: ModalProps) => {

    const modalRef = useRef<any>();

    const closeModal = (e: MouseEvent) => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

  return (
    <>
        { showModal ? (
            <Background ref={modalRef} onClick={closeModal} >
                <div>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>

                        </ModalContent>

                        <CloseModalContent
                            aria-label="Close Modal"
                            onClick={() => setShowModal((prev: any) => !prev)}
                        />

                    </ModalWrapper>
                </div>
            </Background>
        ) : null }
    </>
  )
}

export default Modal