import React, { useEffect } from 'react'
import './grid-view.css'
import { AntaresVerticalList, navigationUtilities } from 'antares'

const GridView = (props) => {

    useEffect(() => {
        props.resumeSpatialNavigation();
    }, [props.listsToDisplay])

    return (
        <div className="grid-container">
            <span className="section-title">TITOLO</span>
            <span className="section-description">Descrizione della sezione</span>

            <div className='grid-view'>
                {props.showGrid && <AntaresVerticalList
                    containerClassname='grid-outer'
                    innerClassname='grid-inner'
                    focusableId='grid'
                    isGrid={true}
                    retainLastFocus={true}
                >
                    {props.listsToDisplay}
                </AntaresVerticalList>}
            </div>
        </div>
    )
}

export default navigationUtilities(GridView);
