import React, { useState } from 'react'
import './list.css'
import { AntaresHorizontalList } from 'antares'

const List = (props) => {

    const [focused, setFocused] = useState(false);

    const toggleFocus = (bool) => {
        setFocused(bool);
    }


    return (
        <AntaresHorizontalList
            focusableId={`list-${props.listIndex}`}
            hasChildrenMatrix={true}
            innerClassname={`${props.listStyle}-inner`}
            containerClassname={`${props.listStyle}-outer`}
            onFocus={() => { toggleFocus(true) }}
            onBlur={() => { toggleFocus(false) }}
        >
            {props.itemsToDisplay}
        </AntaresHorizontalList>
    )
}

export default List
