import React, { useState } from 'react';
import { moviesData } from './MoviesData';

// console.log(moviesData);

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  console.log(genre);
  const genreArr = [...new Set(moviesData.map((movie) => movie.Genre))];

  const filterdMovies = moviesData.filter((movie) => {
    const genreFiltered =
      genre.trim() !== '' ? movie.Genre.includes(genre) : moviesData;

    const searchFiltered =
      searchTerm.trim() !== ''
        ? movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        : moviesData;

    return genreFiltered && searchFiltered;
  });

  console.log(filterdMovies);

  return (
    <div className='main-container'>
      <h1>Movies</h1>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Search a movie...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <section className='genres'>
        <select
          name='genres'
          value={genre}
          style={{ width: '10rem', color: '#000' }}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value='all'>All</option>
          {genreArr.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </section>
      <section
        className='movies-container'
        style={{
          width: '100vw',
          display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {filterdMovies.map((movie) => (
          <div
            key={movie.Rank}
            className='movie-card'
            style={{
              height: '30rem',
              width: '24rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid #000',
              borderRadius: '10px',
              backgroundColor: 'aqua',
            }}
          >
            <h1>{movie.Title}</h1>
            <p>Rank: {movie.Rank}</p>
            <p className='movie-details'>{movie.Description}</p>
            <p className='movie-details'>{movie.Runtime}</p>
            <p className='movie-details'>{movie.Genre}</p>
            <p className='movie-details'>{movie.Rating}</p>
            <p className='movie-details'>{movie.Votes}</p>
            <p className='movie-details'>{movie.Director}</p>
            <p className='movie-details'>{movie.Actor}</p>
            <p className='movie-details'>{movie.Year}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
