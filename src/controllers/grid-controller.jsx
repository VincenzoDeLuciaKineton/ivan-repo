import React, { useContext, useState, useEffect } from 'react'
import { ConfigContext } from '../models/ConfigContext'
import { ModalContext } from '../models/ModalContext'
import GridView from '../views/grid-view/grid-view'
import List from '../components/list/list'
import ListItem from '../components/list-item/list-item'
import Loader from '../components/loader/loader'

const GridController = () => {

    const config = useContext(ConfigContext);
    const modal = useContext(ModalContext);

    const [listsToDisplay, setListsToDisplay] = useState(null);

    useEffect(() => {
        const showMatrix = [];
        if (config.showsToDisplay) {
            const filteredShows = config.showsToDisplay.filter(show => {
                return (show.metaInfo.is_film === "1" || show.episodes.length > 0)
            })
            filteredShows.forEach((show, index) => {
                if (showMatrix[Math.floor(index / 4)]) {
                    showMatrix[Math.floor(index / 4)].push(
                        <ListItem
                            key={index}
                            index={index}
                            listIndex={Math.floor(index / 4)}
                            title={show.title}
                            episodes={show.episodes}
                            content={show.content}
                            poster={show.metaInfo.is_film === '0' ? show.metaInfo.image_poster_show : show.metaInfo.image_poster_film}
                            setElementToDisplay={modal.setElementToDisplay}
                            setShowModal={modal.setShowModal}
                            selectedElement={config.selectedElement}
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
                        poster={show.metaInfo.is_film === '0' ? show.metaInfo.image_poster_show : show.metaInfo.image_poster_film}
                        setElementToDisplay={modal.setElementToDisplay}
                        setShowModal={modal.setShowModal}
                        selectedElement={config.selectedElement}
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
                    selectedElement={config.selectedElement}
                /> : <Loader />}
        </div>
    )
}

export default GridController
