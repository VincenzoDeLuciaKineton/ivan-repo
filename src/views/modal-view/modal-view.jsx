import React, { useEffect } from 'react'
import './modal-view.css'
import { AntaresHorizontalList, AntaresFocusable, navigationUtilities } from 'antares'

const ModalView = (props) => {

    useEffect(() => {
        console.log('focusable to focus back to: ', props.elementToDisplay.title)
        props.focusTo('selected-element')
        props.pauseSpatialNavigation();
    }, [])

    const handleEnterOnModal = () => {
        props.resumeSpatialNavigation();
        props.setShowModal(false);
        props.focusTo(`${props.elementToDisplay.title}`)
    }

    return (
        <AntaresHorizontalList
            innerClassname='modal-inner'
            containerClassname='modal-outer'
            focusableId='modal'
        >
            <AntaresFocusable
                index={0}
                focusableId='selected-element'
                classname='modal-title'
                focusedClassname='modal-title-focused'
                onEnterDown={handleEnterOnModal}
            >
                <div className="show-details">
                    <span className='element-title'>{props.elementToDisplay.title}</span>

                </div>
            </AntaresFocusable>
        </AntaresHorizontalList>
    )

}

export default navigationUtilities(ModalView)
