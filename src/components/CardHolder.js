import React, { useState, useRef } from "react";
import Card from "./Card";

const CardHolder = ({ title, data }) => {
	// const card = [
	// 	{
	// 		id: 1,
	// 		name: "Extraction",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 7.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "My Spy",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 9.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "stories",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 6.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Dying for motherhood",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 8.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "the mad hatter",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 7.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 6,
	// 		name: "a muse",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 9.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 7,
	// 		name: "home sweet home",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 6.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 8,
	// 		name: "finding grace",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 8.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 9,
	// 		name: "I dream of peach",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 7.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 10,
	// 		name: "Broil",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 9.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 11,
	// 		name: "skinned",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 6.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// 	{
	// 		id: 12,
	// 		name: "Axcellerator",
	// 		image: "http://placehold.jp/200x250.jpg",
	// 		rating: 8.2,
	// 		info: {
	// 			plot:
	// 				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
	// 			releaseDate: "12/4/2020",
	// 			genre: "Action, Thriller",
	// 			language: "English",
	// 			budget: "2.5m",
	// 			revenue: "6.5m",
	// 			directior: "Sam",
	// 			story: "Andy",
	// 		},
	// 	},
	// ];

	const [arrow, setArrow] = useState(0);
	const scroller = useRef(null);

	//document.getElementById("cardContainer").scrollLeft -= 200;

	if (arrow === 1) {
		scroller.current.scrollLeft += 200;
		setArrow(0);
	} else if (arrow === -1) {
		scroller.current.scrollLeft -= 200;
		setArrow(0);
	}

	return (
		<div className="cardHolder">
			<h3 className="title"> {title} </h3>
			<div className="cardWrapper" id="cardContainer" ref={scroller}>
				{data.length === 0 ? (
					<h4>No Value</h4>
				) : (
					data.map(value => (
						<Card
							id={value.id}
							key={value.id}
							name={value.name}
							img={value.image}
							rating={value.rating}
							info={value.info}
						/>
					))
				)}
				<div className="next" onClick={() => setArrow(1)}></div>
				<div className="prev" onClick={() => setArrow(-1)}></div>
			</div>
		</div>
	);
};

export default CardHolder;
