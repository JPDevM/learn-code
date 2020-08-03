// Apis recomendadas para practicar
/*
	• https://restcountries.eu/
	• https://developers.themoviedb.org/3
	• https://estadisticasbcra.com/api/documentacion
*/

let moviesContainer = document.querySelector('#movies');
let endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&page=2'

fetch(endPoint)
	.then(function (response) {
		return response.json();
	})
	.then(function (info) {
		let movies = info.results;
		console.log(movies);
		movies.forEach(function (oneMovie) {
			let htmlStructure = `
			<h1>${oneMovie.title}</h1>
			<img src="https://image.tmdb.org/t/p/w500${oneMovie.poster_path}" width="200"/>
			<p>${oneMovie.overview ? oneMovie.overview : 'Sin descripción'}</p>
		`;

			moviesContainer.insertAdjacentHTML('beforeend', htmlStructure)
		});
	})

// let movies = fetch(endPoint).then(function (response) { return response.json() });