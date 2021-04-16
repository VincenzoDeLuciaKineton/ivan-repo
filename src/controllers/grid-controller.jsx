import React, { useContext, useState, useEffect } from 'react'
import { ConfigContext } from '../model/ConfigContext'
import { ModalContext } from '../model/ModalContext'
import GridView from '../views/grid-view/grid-view'
import Sidebar from '../components/sidebar/sidebar'
import List from '../components/list/list'
import ListItem from '../components/list-item/list-item'

const GridController = () => {

    const config = useContext(ConfigContext);
    const modal = useContext(ModalContext);

    const [listsToDisplay, setListsToDisplay] = useState(null);

    useEffect(() => {
        console.log('shows in the controller: ', config.showsToDisplay);
        const showMatrix = [];
        if (config.showsToDisplay) {
            config.showsToDisplay.forEach((show, index) => {
                if (showMatrix[Math.floor(index / 4)]) {
                    showMatrix[Math.floor(index / 4)].push(
                        <ListItem
                            key={index}
                            index={index}
                            title={show.title}
                            episodes={show.episodes}
                            content={show.content}
                            setElementToDisplay={config.setElementToDisplay}
                        />
                    )
                } else {
                    showMatrix.push([[<ListItem
                        key={index}
                        index={index}
                        title={show.title}
                        episodes={show.episodes}
                        content={show.content}
                        setElementToDisplay={config.setElementToDisplay}
                    />]])
                }
            })

            setListsToDisplay(showMatrix.map((list, listIndex) => {
                return <List
                    itemsToDisplay={list}
                    listIndex={listIndex}
                />
            }))
        }
    }, [config.showsToDisplay])

    return (
        <div className='grid-controller'>
            <Sidebar
                categories={config.categories}
                setIdToFetch={config.setIdToFetch}
            />
            <GridView
                listsToDisplay={listsToDisplay}
                setMatrixToDisplay={config.setMatrixToDisplay}
                showGrid={config.showGrid}
                setShowGrid={config.setShowGrid}
                categories={config.categories}
            />
        </div>
    )
}

export default GridController
