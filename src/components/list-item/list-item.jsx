import React, { useState, useEffect } from 'react'
import './list-item.scss'
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
            focusableId: `item-${props.listIndex}-${props.index}`,
            poster: props.poster,
            isFilm: props.isFilm,
            url_film: props.url_film,

        });
        props.setShowModal(true);
    }

    const handleGridItemFocus = () => {
        setIsFocused(true);
        console.log('focusableId: ', `item-${props.listIndex}-${props.index}`)
    }

    const handleGridItemBlur = () => {
        setIsFocused(false);
    }

    return (
        <AntaresFocusable
            index={props.index}
            focusableId={`item-${props.listIndex}-${props.index}`}
            classname={props.url_film !== null ? 'list-movie-item' : 'list-item'}
            focusedClassname={props.url_film !== null ? 'list-movie-item-focused' : 'list-item-focused'}
            onEnterDown={selectItem}
            onFocus={handleGridItemFocus}
            onBlur={handleGridItemBlur}
        >
            <div className={props.url_film !== null ? 'movie-thumbnail' : 'thumbnail'}
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
