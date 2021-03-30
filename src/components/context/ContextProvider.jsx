import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ApiService } from '../../services/ApiService';

export const Context = createContext({
    films: [],
    watchFilms: [],
    addToWatch: () => { },
    deleteToWatch: () => { },
    randomFilm: {}
});

export const ContextProvider = ({ children }) => {


    const [films, setFilms] = useState([]);
    const [watchFilms, setWatchFilms] = useState([]);
    const [randomFilm, setRandomFilm] = useState({});

    const addToWatch = (title, overview, poster_path) => {
        setWatchFilms(prev => prev.find(item => item.title === title) ? prev :
            [
                ...prev,
                { title, overview, poster_path }
            ]
        );
    }

    const deleteToWatch = (name) => {
        setWatchFilms(prev => prev.filter(item => item.title !== name));
    }

    const fetchFilms = async () => {
        const resp = await ApiService().get('popular');
        setFilms(resp)
        setRandomFilm(resp.results[Math.floor(Math.random() * 20)])
    }

    useEffect(() => {
        fetchFilms();
    }, []);


    useEffect(() => {
        if (localStorage.getItem('watchFilms') === null) {
            localStorage.setItem('watchFilms', JSON.stringify([]));
        } else {
            let local = JSON.parse(localStorage.getItem('watchFilms'));
            setWatchFilms(local);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('watchFilms', JSON.stringify(watchFilms));
    }, [watchFilms]);


    const value = useMemo(() => ({
        films,
        addToWatch,
        watchFilms,
        deleteToWatch,
        randomFilm
    }), [films, addToWatch, watchFilms]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}
