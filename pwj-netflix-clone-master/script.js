window.onload = () => {
	addMovies();
};

// Add movies to the front end
function addMovies() {
	// Add image to element to original__movie element
	//<img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />;

	var moviesEl = document.querySelector("original__movies");
	for (var i = 0; i < 5; i++)
		moviesEl.innerHTML +=
			'<img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"/>';
}

addMovies();
	
