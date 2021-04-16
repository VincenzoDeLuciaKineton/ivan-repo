import React, { useContext } from 'react'
import { ConfigContext } from '../model/ConfigContext'
import { ModalContext } from '../model/ModalContext'
import ModalView from '../views/modal-view/modal-view'

const ModalController = () => {

    const config = useContext(ConfigContext);
    const modal = useContext(ModalContext);

    return (
        <div className="modal-controller">
            {modal.showModal &&
                <ModalView
                    itemInFocus={config.itemInFocus}
                    showModal={modal.showModal}
                    setShowModal={modal.setShowModal}
                    elementToDisplay={modal.elementToDisplay}
                    setElementToDisplay={modal.setElementToDisplay}
                />}
        </div>
    )
}

export default ModalController
