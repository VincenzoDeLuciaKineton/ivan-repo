import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { navigationUtilities, AntaresVerticalList } from 'antares'
import SidebarItem from '../sidebar-item/sidebar-item'


const Sidebar = (props) => {

    const [menuItems, setMenuItems] = useState(null);


    useEffect(() => {
        if (props.categories && props.categories.length) {
            console.log('props.categories: ', props.categories);
            setMenuItems(props.categories.map((category, index) => {
                return <SidebarItem
                    key={index}
                    title={category.post_title}
                    id={category.ID}
                    setItemInFocus={props.setItemInFocus}
                    setShowGrid={props.setShowGrid}
                    setIdToFetch={props.setIdToFetch}
                />
            }))

            props.setIdToFetch(props.categories[0].ID)
            props.focusTo(props.categories[0].post_title)
        }

    }, [props.categories]);

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

export default navigationUtilities(Sidebar);
