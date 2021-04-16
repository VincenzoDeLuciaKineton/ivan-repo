import React, { useContext, useState, useEffect } from 'react'
import { ConfigContext } from '../models/ConfigContext'
import { ModalContext } from '../models/ModalContext'
import GridView from '../views/grid-view/grid-view'
import List from '../components/list/list'
import ListItem from '../components/list-item/list-item'

const GridController = () => {

    const config = useContext(ConfigContext);
    const modal = useContext(ModalContext);

    const [listsToDisplay, setListsToDisplay] = useState(null);

    useEffect(() => {
        const showMatrix = [];
        if (config.showsToDisplay) {
            config.showsToDisplay.forEach((show, index) => {
                if (showMatrix[Math.floor(index / 4)]) {
                    showMatrix[Math.floor(index / 4)].push(
                        <ListItem
                            key={index}
                            index={index}
                            listIndex={Math.floor(index / 4)}
                            title={show.title}
                            episodes={show.episodes}
                            content={show.content}
                            setElementToDisplay={modal.setElementToDisplay}
                            setShowModal={modal.setShowModal}
                        />
                    )
                } else {
                    showMatrix.push([[<ListItem
                        key={index}
                        index={index}
                        listIndex={Math.floor(index / 4)}
                        title={show.title}
                        episodes={show.episodes}
                        content={show.content}
                        setElementToDisplay={modal.setElementToDisplay}
                        setShowModal={modal.setShowModal}
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
            {config.showsToDisplay !== null ?
                <GridView
                    listsToDisplay={listsToDisplay}
                    showGrid={config.showGrid}
                    setShowGrid={config.setShowGrid}
                    categories={config.categories}
                /> : null}
        </div>
    )
}

export default GridController
