import React, { useState, useEffect } from 'react'
import './episodes.css'
import { AntaresFocusable, AntaresVerticalList, navigationUtilities } from 'antares'

const Episodes = (props) => {

    const [episodesToDisplay, setEpisodesToDisplay] = useState(null);

    useEffect(() => {
        if (props.episodes) {
            setEpisodesToDisplay(props.episodes.map((episode, index) => {
                return <AntaresFocusable
                    index={index}
                    focusableId={episode.title}
                    classname='episode'
                    focusedClassname='episode-focused'
                    onFocus={() => {
                    }}
                >
                    <span className="episode-title">{episode.title}</span>
                </AntaresFocusable>
            }))
        }
    }, [props.episodes])

    return (
        <AntaresVerticalList
            containerClassname="episodes-list-outer"
            innerClassname='episodes-list-inner'
            fixed={true}
        >
            {episodesToDisplay}
        </AntaresVerticalList>
    )
}

export default navigationUtilities(Episodes)
