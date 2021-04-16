import React, { useContext } from 'react'
import { ConfigContext } from '../models/ConfigContext'
import SidebarView from '../views/sidebar-view/sidebar-view'


const SidebarController = () => {

    const config = useContext(ConfigContext);

    return (
        <div className='sidebar-controller'>
            <SidebarView
                categories={config.categories}
                idToFetch={config.idToFetch}
                setIdToFetch={config.setIdToFetch}
            />
        </div>
    )
}

export default SidebarController
