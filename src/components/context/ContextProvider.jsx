import React, { createContext, useEffect, useMemo, useState } from 'react';

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

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=108a3dcad1f9a8ddef8c60eac64385d7')
            .then(resp => resp.json())
            .then(resp => {
                setFilms(resp)
                setRandomFilm(resp.results[Math.floor(Math.random() * 20)])
            })
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
