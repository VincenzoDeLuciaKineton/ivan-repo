import React, { useContext, useState, useEffect } from 'react'
import { ConfigContext } from '../models/ConfigContext'
import { ModalContext } from '../models/ModalContext'
import ModalView from '../views/modal-view/modal-view'
import Episode from '../components/episode/episode'

const ModalController = () => {

    const config = useContext(ConfigContext);
    const modal = useContext(ModalContext);

    const [episodesToDisplay, setEpisodesToDisplay] = useState(null);

    useEffect(() => {
        if (modal.elementToDisplay && modal.elementToDisplay.episodes) {
            setEpisodesToDisplay(modal.elementToDisplay.episodes.map((episode, index) => {
                return <Episode
                    index={index}
                    key={episode.title}
                    episode={episode}
                />
            }))
        }
    }, [modal.elementToDisplay])

    return (
        <div className="modal-controller">
            {modal.showModal &&
                <ModalView
                    itemInFocus={config.itemInFocus}
                    showModal={modal.showModal}
                    setShowModal={modal.setShowModal}
                    elementToDisplay={modal.elementToDisplay}
                    setElementToDisplay={modal.setElementToDisplay}
                    episodesToDisplay={episodesToDisplay}
                />}
        </div>
    )
}

export default ModalController;