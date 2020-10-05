window.onload = () => {
	//addMovies();
	fetchMovies();
};

// Add movies to the front end
function fetchMovies() {
	fetch(
		"https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
	)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then((data) => {
			addMovies(data);
		})
		.catch((error_data) => {
			console.log(error_data);
		});
}
// Add image to element to original__movie element
/*.original__movie {
	<img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"/>;
}*/

function addMovies(movies) {
	//console.log(movies);
	var moviesEl = document.querySelector("original__movies");
	//console.log(moviesEl) //moviesE1 resulting in null
	for (var movie of movies.results) {
		var image = `<img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/>`;

		moviesEl.innerHTML += image;
		//console.log(image);
	}
}
//addMovies();
