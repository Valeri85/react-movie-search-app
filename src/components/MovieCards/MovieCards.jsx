import React from 'react';

import './MovieCards.scss';

export const MovieCards = ({ movie }) => (
	<li className="cards__item">
		<figure className="cards__card">
			<img
				className="cards__img"
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
				alt={`${movie.title} poster`}
			/>
			<figcaption className="cards__description">
				<h2 className="cards__title">{movie.title}</h2>
				<p className="cards__release">
					<small>RELEASE DATE: {movie.release_date}</small>
				</p>
				<p className="cards__rating">
					<small>RATING: {movie.vote_average}</small>
				</p>
				<p className="cards-overview">{movie.overview}</p>
			</figcaption>
		</figure>
	</li>
);
