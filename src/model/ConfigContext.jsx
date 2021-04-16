import React, { createContext, useState, useEffect } from 'react'

export const ConfigContext = createContext();


export const ConfigProvider = ({ children }) => {

    const [itemInFocus, setItemInFocus] = useState(null);
    const [showGrid, setShowGrid] = useState(true);
    const [categories, setCategories] = useState(null);
    const [idToFetch, setIdToFetch] = useState(null);
    const [showsToDisplay, setShowsToDisplay] = useState(null);

    useEffect(() => {
        fetch('https://www.tg38.it/play38//wp-content/api/getApi.php?data=getMenu&value=menu-hbbtv').then(result => {
            console.log('result: ', result)
            return result.json();
        }).then(fetchResult => {
            console.log('fetchResult: ', fetchResult)
            setCategories(fetchResult.data);
        })

    }, [])

    useEffect(() => {
        console.log('FETCHING SHOWS FOR: ', idToFetch)
        fetch(`https://www.tg38.it/play38//wp-content/api/getApi.php?data=getItemFromMenuId&value=${idToFetch}`).then(result => result.json()).then(fetchedShows => {
            console.log('fetchedShows: ', fetchedShows);
            setShowsToDisplay(fetchedShows.data);
        })
    }, [idToFetch])

    return (
        <ConfigContext.Provider value={{ itemInFocus, setItemInFocus, showGrid, setShowGrid, categories, setIdToFetch, showsToDisplay }}>
            {children}
        </ConfigContext.Provider>
    )
}
