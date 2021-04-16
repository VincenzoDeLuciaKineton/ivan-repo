import React from 'react'
import { ConfigProvider } from '../models/ConfigContext'
import { ModalProvider } from '../models/ModalContext'
import SidebarController, { } from '../controllers/sidebar-controller'
import GridController from '../controllers/grid-controller'
import ModalController from '../controllers/modal-controller'

const AppController = () => {

    return (
        <div className='app-controller'>
            <ConfigProvider>
                <ModalProvider>
                    <SidebarController />
                    <ModalController />
                    <GridController />
                </ModalProvider>
            </ConfigProvider>
        </div>
    )
}

export default AppController;
