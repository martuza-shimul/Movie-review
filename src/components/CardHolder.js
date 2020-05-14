import React from "react";
import Card from "./Card";

const CardHolder = ({ title }) => {
	const card = [
		{
			id: 1,
			name: "Extraction",
			image: "http://placehold.jp/200x250.jpg",
			rating: 7.2,
		},
		{
			id: 2,
			name: "My Spy",
			image: "http://placehold.jp/200x250.jpg",
			rating: 9.2,
		},
		{
			id: 3,
			name: "stories",
			image: "http://placehold.jp/200x250.jpg",
			rating: 6.2,
		},
		{
			id: 4,
			name: "Dying for motherhood",
			image: "http://placehold.jp/200x250.jpg",
			rating: 8.2,
		},
		{
			id: 5,
			name: "the mad hatter",
			image: "http://placehold.jp/200x250.jpg",
			rating: 7.2,
		},
		{
			id: 6,
			name: "a muse",
			image: "http://placehold.jp/200x250.jpg",
			rating: 9.2,
		},
		{
			id: 7,
			name: "home sweet home",
			image: "http://placehold.jp/200x250.jpg",
			rating: 6.2,
		},
		{
			id: 8,
			name: "finding grace",
			image: "http://placehold.jp/200x250.jpg",
			rating: 8.2,
		},
		{
			id: 9,
			name: "I dream of peach",
			image: "http://placehold.jp/200x250.jpg",
			rating: 7.2,
		},
		{
			id: 10,
			name: "Broil",
			image: "http://placehold.jp/200x250.jpg",
			rating: 9.2,
		},
		{
			id: 11,
			name: "skinned",
			image: "http://placehold.jp/200x250.jpg",
			rating: 6.2,
		},
		{
			id: 12,
			name: "Axcellerator",
			image: "http://placehold.jp/200x250.jpg",
			rating: 8.2,
		},
	];
	function prev() {
		document.getElementById("cardContainer").scrollLeft -= 200;
	}

	function next() {
		document.getElementById("cardContainer").scrollLeft += 200;
	}
	return (
		<div className="cardHolder">
			<h3 className="title"> {title} </h3>
			<div className="cardWrapper" id="cardContainer">
				{card.length === 0 ? (
					<h4>No Value</h4>
				) : (
					card.map(value => (
						<Card
							key={value.id}
							name={value.name}
							img={value.image}
							rating={value.rating}
						/>
					))
				)}

				<div className="next" onClick={next}></div>
				<div className="prev" onClick={prev}>
					{" "}
				</div>
			</div>
		</div>
	);
};

export default CardHolder;
