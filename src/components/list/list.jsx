import React from 'react'
import './list.scss'
import { AntaresHorizontalList } from 'antares'

const List = (props) => {

    return (
        <AntaresHorizontalList
            focusableId={`list-${props.listIndex}`}
            hasChildrenMatrix={true}
            innerClassname={`${props.listStyle}-inner`}
            containerClassname={`${props.listStyle}-outer`}
        >
            {props.itemsToDisplay}
        </AntaresHorizontalList>
    )
}

export default List
