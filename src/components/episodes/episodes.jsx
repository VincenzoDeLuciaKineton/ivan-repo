import React from 'react'
import './episodes.scss'
import { AntaresHorizontalList, navigationUtilities } from 'antares'

const Episodes = (props) => {

    return (
        <AntaresHorizontalList
            containerClassname="episodes-list-outer"
            innerClassname='episodes-list-inner'
            fixed={true}
            remainInFocus={true}
        >
            {props.episodesToDisplay}
        </AntaresHorizontalList>
    )
}

export default navigationUtilities(Episodes)
