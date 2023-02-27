import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=b977a3f4';




const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const serachMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

            setMovies(data.Search)
    }


    useEffect(() => {
        serachMovies({movies})
    }, [])
    return (
        <div className="app">
        <div className="headName">
         <h1>ZEKE MOVIES</h1>
         </div>
         <div className="searchBar">
            <input
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value) }
            />
                    <img 
                    src={SearchIcon}
                    alt="Search" 
                    onClick={() => serachMovies(searchTerm)}/>
         </div>
         {
            movies?.length > 0
            ? (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
         </div>
            ) : (
                <div><h2>No movies found</h2></div>
            )
         }
         </div>
         );
}


export default App;