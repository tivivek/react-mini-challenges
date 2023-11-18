import React, { useState } from 'react';
import { moviesData } from '../components/MoviesData';

export default function MoviesRe() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');

  const allGenres = [...new Set(moviesData.map((movie) => movie.Genre))];

  const filteredData = moviesData.filter((movie) => {
    const selectedGenre =
      genre != 'Genres' ? movie.Genre.includes(genre) : moviesData;

    const movieSearched =
      searchTerm.trim() !== ''
        ? movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        : moviesData;

    return selectedGenre && movieSearched;
  });

  return (
    <div>
      <h1>Movies</h1>
      <input
        type='text'
        placeholder='Enter movie title to search..'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select name='movie' onChange={(e) => setGenre(e.target.value)}>
        <option value='Genres'>All</option>
        {allGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <div
        className='movie-container'
        style={{
          width: '100vw',
          flexWrap: 'wrap',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {filteredData.map((movie) => (
          <div
            key={movie.Rank}
            className='movie-card'
            style={{
              height: '30rem',
              width: '20rem',
              backgroundColor: 'aqua',
              border: '2px solid black',
              borderRadius: '10px',
            }}
          >
            <h1>{movie.Title}</h1>
            <p>{movie.Description}</p>
            <p>{movie.Rank}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Rating}</p>
            <p>{movie.Rating}</p>
            <p>{movie.Votes}</p>
            <p>{movie.Year}</p>
            <p>{movie.Actor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
