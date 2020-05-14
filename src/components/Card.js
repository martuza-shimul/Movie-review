import React from "react";

const Card = props => {
	console.log(props);

	return (
		<div className="card" key={props.id}>
			<a href="#">
				<figure>
					<img src={props.img} alt="poster" />
					<p>{props.rating}</p>
					<figcaption>{props.name} </figcaption>
				</figure>
			</a>
		</div>
	);
};

export default Card;
