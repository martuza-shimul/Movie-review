import React from "react";
import { Link } from "@reach/router";

const Card = props => {
	// console.log(props.id);

	return (
		<div className="card" key={props.id}>
			<Link to={`/details/${props.id}`}>
				<figure>
					<img src={props.img} alt="poster" />
					<p>{props.rating}</p>
					<figcaption>{props.name} </figcaption>
				</figure>
			</Link>
		</div>
	);
};

export default Card;
