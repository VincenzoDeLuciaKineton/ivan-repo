import React, { useState, useEffect } from 'react'
import './sidebar-item.scss'
import { AntaresFocusable, addKeydownEvent, removeKeydownEvent, navigationUtilities } from 'antares'

const SidebarItem = (props) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleSidebarItemFocus = () => {
        setIsFocused(true);
    }

    const handleSidebarItemBlur = () => {
        setIsFocused(false);
    }

    const toggleGrid = () => {
        props.setShowsToDisplay(null);
        props.setSelectedElement(props.title);
        props.setIdToFetch(props.id);
    }

    useEffect(() => {
        const onKeyDownHandler = (e) => {
            e.preventDefault();
            if (e.keyCode === 39 && props.id !== props.idToFetch) {
                toggleGrid();
                props.pauseSpatialNavigation();
            }
        }
        if (isFocused) {
            const onKeyDown = addKeydownEvent(onKeyDownHandler)
            return () => {
                removeKeydownEvent(onKeyDown)
            }
        }
    }, [isFocused, props.idToFetch]);

    return (
        <AntaresFocusable
            classname='sidebar-item'
            focusedClassname='sidebar-item-focused'
            focusableId={props.title}
            onFocus={handleSidebarItemFocus}
            onBlur={handleSidebarItemBlur}
            onEnterDown={toggleGrid}>
            <div className={props.selectedElement === props.title ? 'sidebar-item-label-selected' : 'sidebar-item-label'}
            >
                <span>{props.title}</span>
            </div>
        </AntaresFocusable>
    )
}

export default navigationUtilities(SidebarItem);
