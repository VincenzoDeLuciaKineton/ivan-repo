import React, { useEffect } from 'react'
import './movie-modal.css'
import { AntaresFocusable, AntaresHorizontalList, navigationUtilities } from 'antares'
import PlayIcon from '../../assets/images/play.svg'



const MovieModal = (props) => {

    useEffect(() => {
        props.focusTo('play-movie-button');
        console.log('movie: ', props.elementToDisplay)
    }, [])

    const playMovie = () => {
        console.log('movie url: ', props.elementToDisplay.url_film)
    }

    return (
        <div className="poster-and-play-button">
            <img src={props.elementToDisplay.poster} alt={`Movie poster for the movie: ${props.elementToDisplay.title}`} className='poster' />
            <AntaresHorizontalList
                focusableId='play-movie-button'
                containerClassname='play-movie-outer'
                innerClassname='play-movie-inner'
                remainInFocus={true}
            >
                <AntaresFocusable
                    focusableId='play-button-focusable'
                    classname='play-movie-button'
                    focusedClassname='play-movie-button-focused'
                    onEnterDown={playMovie}
                >
                    <div className="info-and-play">
                        <span className='play-movie-button-label'>Play</span>
                        <img src={PlayIcon} alt='play icon' className='movie-play-icon' />
                    </div>
                </AntaresFocusable>
            </AntaresHorizontalList>
        </div>
    )
}

export default navigationUtilities(MovieModal)
