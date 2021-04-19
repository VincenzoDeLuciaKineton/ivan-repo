import React, { useState, useEffect } from 'react'
import './sidebar-view.css'
import { navigationUtilities, AntaresVerticalList } from 'antares'
import SidebarItem from '../../components/sidebar-item/sidebar-item'


const SidebarView = (props) => {

    const [menuItems, setMenuItems] = useState(null);
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
        if (props.categories && props.categories.length) {
            props.focusTo(props.categories[0].post_title);
            setSelectedElement(props.categories[0].post_title);
        }
    },
        [props.categories])


    useEffect(() => {
        if (props.categories && props.categories.length) {
            setMenuItems(props.categories.map((category, index) => {
                return <SidebarItem
                    key={index}
                    title={category.post_title}
                    id={category.ID}
                    setItemInFocus={props.setItemInFocus}
                    setShowGrid={props.setShowGrid}
                    idToFetch={props.idToFetch}
                    setIdToFetch={props.setIdToFetch}
                    selectedElement={selectedElement}
                    setSelectedElement={setSelectedElement}
                />
            }))
        }

    }, [props.categories, props.idToFetch, selectedElement]);

    useEffect(() => {
        console.log('selectedElement: ', selectedElement)
    }, [selectedElement])

    return (
        <div className="sidebar-and-loader"><AntaresVerticalList
            containerClassname='sidebar-outer'
            innerClassname='sidebar-inner'
            focusableId='sidebar'
            retainLastFocus={true}>
            {menuItems && menuItems.length > 0 ? menuItems : null}
        </AntaresVerticalList>
        </div>
    )
}

export default navigationUtilities(SidebarView);
