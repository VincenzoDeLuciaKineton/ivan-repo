import React, { createContext, useState } from 'react'

export const ModalContext = createContext();



export const ModalProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [elementToDisplay, setElementToDisplay] = useState(null);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal, elementToDisplay, setElementToDisplay }}>
            {children}
        </ModalContext.Provider>
    )
}
