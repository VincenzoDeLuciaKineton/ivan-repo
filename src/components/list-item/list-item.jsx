import React, { useState, useEffect } from 'react'
import './list-item.css'
import { AntaresFocusable, addKeydownEvent, removeKeydownEvent, navigationUtilities } from 'antares'

const ListItem = (props) => {

    const [isFocused, setIsFocused] = useState(false);

    let onKeyDown;

    const onKeyDownHandler = (e) => {
        e.preventDefault();
        if (e.keyCode === 8 || e.keyCode === 461) {
            props.focusTo(props.selectedElement);
        }
    }

    useEffect(() => {
        if (!onKeyDown && isFocused) {
            onKeyDown = addKeydownEvent(onKeyDownHandler);
        }

        return () => {
            removeKeydownEvent(onKeyDown);
        }
    }, [onKeyDownHandler])

    const selectItem = () => {
        props.setElementToDisplay({
            title: props.title,
            episodes: props.episodes,
            content: props.content,
            focusableId: `item-${props.index}-${props.listIndex}`,
            poster: props.poster,
            isFilm: props.isFilm

        });
        props.setShowModal(true);
    }

    const handleGridItemFocus = () => {
        setIsFocused(true);
    }

    const handleGridItemBlur = () => {
        setIsFocused(false);
    }

    return (
        <AntaresFocusable
            index={props.index}
            focusableId={`item-${props.index}-${props.listIndex}`}
            classname='row-item'
            focusedClassname='row-item-focused'
            onEnterDown={selectItem}
            onFocus={handleGridItemFocus}
            onBlur={handleGridItemBlur}
        >
            <div className="thumbnail"
                style={
                    {
                        backgroundImage: `url(${props.poster ? props.poster : null})`,
                    }
                }
            >
                <span>{props.title}</span>
            </div>
        </AntaresFocusable>
    )
}

export default navigationUtilities(ListItem);
