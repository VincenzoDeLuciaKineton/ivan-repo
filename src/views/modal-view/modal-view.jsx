import React, { useEffect } from 'react'
import './modal-view.css'
import { AntaresHorizontalList, AntaresFocusable, navigationUtilities } from 'antares'

const ModalView = ({ focusTo, pauseSpatialNavigation, resumeSpatialNavigation, itemInFocus, elementToDisplay, setShowModal }) => {

    useEffect(() => {
        focusTo('selected-element')
        pauseSpatialNavigation();
    }, [])

    const handleEnterOnModal = () => {
        resumeSpatialNavigation();
        setShowModal(false);
        focusTo(`item-${itemInFocus[0]}-${itemInFocus[1]}`)
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
                <span className='element-title'>{elementToDisplay}</span>
            </AntaresFocusable>
        </AntaresHorizontalList>
    )

}

export default navigationUtilities(ModalView)
