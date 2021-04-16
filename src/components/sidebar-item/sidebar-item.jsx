import React, { useState, useEffect, useRef } from 'react'
import './sidebar-item.css'
import { AntaresFocusable, addKeydownEvent, removeKeydownEvent, navigationUtilities } from 'antares'

const SidebarItem = (props) => {

    const [isFocused, setIsFocused] = useState(false);
    const categoryRef = useRef(null);

    const handleSidebarItemFocus = () => {
        setIsFocused(true);
    }

    const handleSidebarItemBlur = () => {
        setIsFocused(false);
    }

    const toggleGrid = () => {
        props.setIdToFetch(props.id);
        categoryRef.current = props.id;
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
            <span className='sidebar-item-label'>{props.title}</span>
        </AntaresFocusable>
    )
}

export default navigationUtilities(SidebarItem);
