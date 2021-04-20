import React, { useEffect } from 'react'
import './grid-view.css'
import { AntaresVerticalList, navigationUtilities } from 'antares'

const GridView = (props) => {

    useEffect(() => {
        props.resumeSpatialNavigation();
    }, [props.listsToDisplay])

    return (
        <div className="grid-container">
            <span className="section-title">{props.selectedElement}</span>

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
