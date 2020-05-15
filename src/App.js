// import React, { useState, useEffect } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import img from "./img/dummy.jpg";
import CardHolder from "./components/CardHolder";

// omdb api = "http://www.omdbapi.com/?t=Game+of+Thrones&apikey=a51e37be"

function App() {
	// state.
	// const [img, setImg] = useState([]);

	// useEffect(() => {
	// 	getValue();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [img]);
	// console.log(img);

	// var query = "Thor";
	// const getValue = async () => {
	// 	const apiCall = await fetch(
	// 		// theMovieDB API
	// 		`https://api.themoviedb.org/3/search/movie?api_key=d9e5042ea73fb5a2c1855ec63cd94f3a&language=en-US&query=${query}&page=1&include_adult=false`
	// 	);
	// 	const data = await apiCall.json();
	// 	var posterPath = data.results.map(poster => {
	// 		return poster.poster_path;
	// 	});
	// 	console.log(data);
	// 	// console.log(posterPath[0]);
	// 	setImg(posterPath);
	// };

	//	http://placehold.jp/1600x450.jpg // placeholder image

	return (
		<div className="">
			<Header />
			<Hero heroBg={img} />
			<div className="container">
				<CardHolder title="Popular movies" />
			</div>

			{/* {img.map(img => (
				<img
					src={
						img
							? "https://image.tmdb.org/t/p/original" + img
							: "http://via.placeholder.com/640x360"
					}
					alt="Movie Poster"
				/>
			))} */}
			<Footer />
		</div>
	);
}

export default App;
