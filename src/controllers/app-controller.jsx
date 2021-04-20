import React, { useContext } from 'react'
import { ConfigContext } from '../models/ConfigContext'
import { ModalProvider } from '../models/ModalContext'
import SidebarController from '../controllers/sidebar-controller'
import GridController from '../controllers/grid-controller'
import ModalController from '../controllers/modal-controller'
import LoaderView from '../views/loader-view/loader-view'

const AppController = () => {

    const config = useContext(ConfigContext);

    return (
        <div className='app-controller'>
            {config.categories ? <ModalProvider>
                <ModalController />
                <SidebarController />
                <GridController />
            </ModalProvider> : <LoaderView />}
        </div>
    )
}

export default AppController;
