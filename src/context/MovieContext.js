import  React, { useState, createContext } from 'react';

// whenever we want to use the movies information, we have to call MovieContext
const MovieContext = createContext();

const MovieProvider = (props) => { // Provides de information to the different components

    const [ movies, setMovies ] = useState([
        {name: 'Harry Potter', price: '$10', id: 1},
        {name: 'Game of Thrones', price: '$11', id: 2},
        {name: 'Inception', price: '$12', id: 3},
    ]);

    return ( // props.children will render all the components: Nav, MovieList, Movie, etc.
        <MovieContext.Provider value={[ movies, setMovies ]}>
            { props.children }
        </MovieContext.Provider>
    );
}

export { MovieContext, MovieProvider };