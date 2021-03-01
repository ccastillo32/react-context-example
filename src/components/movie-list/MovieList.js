import { useContext, useState } from 'react';
import Movie from '../movie/Movie';
import { MovieContext } from '../../context/MovieContext';

const MovieList = () => {

    const [ movies ] = useContext(MovieContext);

    return (
        <>
            {
                movies.map( movie => (
                    <Movie 
                        name={ movie.name } 
                        price={ movie.price } 
                        key={ movie.id } 
                    />
                ))
            }
        </>
    );

}

export default MovieList;
