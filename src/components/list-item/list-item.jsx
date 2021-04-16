import React from 'react'
import './list-item.css'
import { AntaresFocusable } from 'antares'

const ListItem = (props) => {

    const handleFocus = () => {
        console.log('props.title: ', props.title)
    }

    const selectItem = () => {
        props.setElementToDisplay({ title: props.title, episodes: props.episodes, content: props.content });
        props.setShowModal(true);
    }

    return (
        <AntaresFocusable
            index={props.index}
            focusableId={`${props.title}`}
            classname='row-item'
            focusedClassname='row-item-focused'
            onFocus={handleFocus}
            onEnterDown={selectItem}>
            <span>{props.title}</span>
        </AntaresFocusable>
    )
}

export default ListItem;
