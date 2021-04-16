import React, { useState, useEffect } from 'react'
import './sidebar-item.css'
import { AntaresFocusable, addKeydownEvent, removeKeydownEvent, navigationUtilities } from 'antares'

const SidebarItem = (props) => {

    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleSidebarItemFocus = () => {
        setIsFocused(true);
    }

    const handleSidebarItemBlur = () => {
        setIsFocused(false);
    }

    const toggleGrid = () => {
        if (!isFocused) {
            return;
        } else {
            props.setIdToFetch(props.id);
        }
    }

    const onKeyDownHandler = (e) => {
        e.preventDefault();
        if (e.keyCode === 39) {
            if (isFocused) {
                console.log('RIGHT KEY PRESSED')
                props.pauseSpatialNavigation();
                setLoading(true);
                toggleGrid();
            }

        }
    }

    useEffect(() => {
        const onKeyDown = addKeydownEvent(onKeyDownHandler)
        return () => {
            removeKeydownEvent(onKeyDown)
        }
    }, [isFocused]);

    return (
        <AntaresFocusable
            classname='sidebar-item'
            focusedClassname='sidebar-item-focused'
            focusableId={props.title}
            onFocus={handleSidebarItemFocus}
            onBlur={handleSidebarItemBlur}
            onEnterDown={toggleGrid}>
            <span className='sidebar-item-label'>{props.title}</span>
        </AntaresFocusable>
    )
}

export default navigationUtilities(SidebarItem)
