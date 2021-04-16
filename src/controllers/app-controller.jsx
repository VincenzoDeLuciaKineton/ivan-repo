import React from 'react'
import { ConfigProvider } from '../model/ConfigContext'
import { ModalProvider } from '../model/ModalContext'
import GridController from '../controllers/grid-controller'
import ModalController from '../controllers/modal-controller'

const AppController = () => {

    return (
        <div className='app-controller'>
            <ConfigProvider>
                <ModalProvider>
                    <ModalController />
                    <GridController />
                </ModalProvider>
            </ConfigProvider>
        </div>
    )
}

export default AppController
