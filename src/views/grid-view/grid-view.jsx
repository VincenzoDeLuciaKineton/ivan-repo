import React, { useState, useEffect } from 'react'
import './grid-view.css'
import { AntaresVerticalList } from 'antares'

const GridView = (props) => {

    return (
        <div className='grid-view'>
            {props.showGrid && <AntaresVerticalList
                containerClassname='grid-outer'
                innerClassname='grid-inner'
                focusableId='grid'
                isGrid={true}>
                {props.listsToDisplay}
            </AntaresVerticalList>}
        </div>
    )
}

export default GridView
