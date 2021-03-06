import React, { createContext, useState, useEffect } from 'react'

export const ConfigContext = createContext();


export const ConfigProvider = ({ children }) => {

    const [itemInFocus, setItemInFocus] = useState(null);
    const [showGrid, setShowGrid] = useState(true);
    const [categories, setCategories] = useState(null);
    const [idToFetch, setIdToFetch] = useState(null);
    const [showsToDisplay, setShowsToDisplay] = useState(null);
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {

        fetch('https://www.tg38.it/play38//wp-content/api/getApi.php?data=getMenu&value=menu-hbbtv').then(result => {
            return result.json();
        }).then(fetchResult => {
            setCategories(fetchResult.data);
            setIdToFetch(fetchResult.data[0].ID);
            setSelectedElement(fetchResult.data[0].post_title);
        })

    }, [])

    useEffect(() => {

        if (idToFetch) {
            fetch(`https://www.tg38.it/play38//wp-content/api/getApi.php?data=getItemFromMenuId&value=${idToFetch}`).then(result => result.json()
            ).then(fetchedShows => {
                setShowsToDisplay(fetchedShows.data);
            })
        }

    }, [idToFetch])

    return (
        <ConfigContext.Provider value={{
            itemInFocus, setItemInFocus,
            showGrid, setShowGrid,
            categories,
            idToFetch, setIdToFetch,
            showsToDisplay, setShowsToDisplay,
            selectedElement, setSelectedElement
        }}
        >
            {children}
        </ConfigContext.Provider>
    )
}
