import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Modal = ({ children }: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }

    return (
        <div id="modal" className="hide">
            <div className="fade" onClick={closeModal}>
                fadee
            </div>

            <div className="modal p-10">
                {children}
            </div>
        </div>
    )
}

export default Modal