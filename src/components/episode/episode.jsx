import React, { useState } from 'react'
import './episode.css'
import { AntaresFocusable } from 'antares'
import PlayIcon from '../../assets/images/play.svg'

const Episode = (props) => {

    const [isEpisodeFocused, setIsEpisodeFocused] = useState(false);

    const handleEpisodeFocus = () => {
        setIsEpisodeFocused(true);
    }

    const handleEpisodeBlur = () => {
        setIsEpisodeFocused(false);
    }

    return (
        <AntaresFocusable
            index={props.index}
            focusableId={props.episode.title}
            classname='episode'
            focusedClassname='episode-focused'
            onFocus={handleEpisodeFocus}
            onBlur={handleEpisodeBlur}
            scrollOffset={150}
        >
            <div className="episode-thumbnail"
                style={{ backgroundImage: `url(${props.episode.metaInfo.image_thumbnail ? props.episode.metaInfo.image_thumbnail : null})` }}
            >
                <div className="episode-overlay">
                    {isEpisodeFocused ?
                        <img src={PlayIcon} className='play-icon' alt='play icon' />
                        : null}
                    <div className="episode-shadow">
                        <span className="episode-title">{props.episode.title}</span>
                    </div>
                </div>
            </div>
        </AntaresFocusable>
    )
}

export default Episode
