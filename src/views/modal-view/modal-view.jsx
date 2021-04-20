import React, { useEffect } from 'react'
import './modal-view.css'
import { navigationUtilities, addKeydownEvent, removeKeydownEvent } from 'antares'
import Episodes from '../../components/episodes/episodes'

const ModalView = (props) => {

    let onKeyDown;

    const handleBackFromModal = () => {
        props.resumeSpatialNavigation();
        props.setShowModal(false);
        props.focusTo(`${props.elementToDisplay.focusableId}`);
    }

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 461 || e.keyCode === 8) {
            handleBackFromModal();
        }
    }

    useEffect(() => {

        if (!onKeyDown) {
            onKeyDown = addKeydownEvent(onKeyDownHandler)
        }

        return () => {
            removeKeydownEvent(onKeyDown)
        }
    }, [onKeyDownHandler]);

    useEffect(() => {
        if (props.elementToDisplay.episodes && props.elementToDisplay.episodes.length > 0) {
            props.focusTo(props.elementToDisplay.episodes[0].title)
        }
    }, [props.elementToDisplay.episodes])

    return (
        <div className="show-modal">
            <div className="overview">
                <div className="element-description">
                    <span className='element-title'>{props.elementToDisplay.title}</span>
                    <span className="element-content">{props.elementToDisplay.content}</span>
                </div>
                {props.elementToDisplay.episodes.length !== 0 ? <div className="episodes">
                    <Episodes
                        episodes={props.elementToDisplay.episodes}
                    />
                </div> : null}
            </div>
        </div>

    )

}

export default navigationUtilities(ModalView)
