import React, { useState } from 'react';

import { MovieCards } from '../MovieCards/MovieCards';
import './Search.scss';

export const Search = _ => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovie = async event => {
		event.preventDefault();
		try {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=4f70fbbd83d33d1c2444b3928bc7b1df&language=en-US&query=${query}&page=1&include_adult=true`;
			const response = await fetch(url);
			if (!response.ok) throw new Error(`No Response ${response.status}`);
			const data = await response.json();
			setMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	const changeHandler = event => setQuery(event.target.value);

	const movieCardsElements = _ =>
		movies
			.filter(movie => movie.poster_path)
			.map(movie => <MovieCards key={movie.id} movie={movie} />);

	return (
		<main className="main">
			<form className="form" onSubmit={searchMovie}>
				<label className="form__label" htmlFor="query">
					Movie Name
				</label>
				<input
					className="form__input"
					type="text"
					name="query"
					value={query}
					onChange={changeHandler}
					placeholder="i.e. Jurassic Park"
				/>
				<button className="form__button" type="submit">
					Search
				</button>
			</form>
			<ul className="cards">{movieCardsElements()}</ul>
		</main>
	);
};
