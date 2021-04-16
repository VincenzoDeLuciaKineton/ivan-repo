import React from 'react'
import './list-item.css'
import { AntaresFocusable } from 'antares'

const ListItem = ({ index, listIndex, setShowModal, ...props }) => {

    const handleFocus = () => {
    }

    const selectItem = () => {
        props.setElementToDisplay(`Item ${listIndex} - ${index}`);
        setShowModal(true);
    }

    return (
        <AntaresFocusable
            index={index}
            focusableId={`item-${listIndex}-${index}`}
            classname='row-item'
            focusedClassname='row-item-focused'
            onFocus={handleFocus}
            onEnterDown={selectItem}>
            <span>{props.title}</span>
        </AntaresFocusable>
    )
}

export default ListItem;
