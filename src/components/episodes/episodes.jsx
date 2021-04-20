import React, { useState, useEffect } from 'react'
import './episodes.css'
import { AntaresHorizontalList, navigationUtilities } from 'antares'
import Episode from '../episode/episode'

const Episodes = (props) => {

    const [episodesToDisplay, setEpisodesToDisplay] = useState(null);

    useEffect(() => {
        if (props.episodes) {
            setEpisodesToDisplay(props.episodes.map((episode, index) => {
                return <Episode
                    index={index}
                    key={episode.title}
                    episode={episode}
                />
            }))
        }
    }, [props.episodes])

    return (
        <AntaresHorizontalList
            containerClassname="episodes-list-outer"
            innerClassname='episodes-list-inner'
            fixed={true}
            remainInFocus={true}
        >
            {episodesToDisplay}
        </AntaresHorizontalList>
    )
}

export default navigationUtilities(Episodes)
