import React from "react";
import Card from "./Card";

const CardHolder = ({ title }) => {
	return (
		<div className="cardHolder">
			<h3 className="title"> {title} </h3>
			<div className="cardWrapper">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default CardHolder;
