import React from 'react'
import './list-item.css'
import { AntaresFocusable } from 'antares'

const ListItem = (props) => {

    const selectItem = () => {
        props.setElementToDisplay({
            title: props.title,
            episodes: props.episodes,
            content: props.content,
            focusableId: `item-${props.index}-${props.listIndex}`
        });
        props.setShowModal(true);
    }

    return (
        <AntaresFocusable
            index={props.index}
            focusableId={`item-${props.index}-${props.listIndex}`}
            classname='row-item'
            focusedClassname='row-item-focused'
            onEnterDown={selectItem}>
            <span>{props.title}</span>
        </AntaresFocusable>
    )
}

export default ListItem;
