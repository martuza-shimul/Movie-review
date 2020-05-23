import React from "react";
import { Link } from "@reach/router";

const Card = props => {
	// console.log(props.info);

	return (
		<div className="card">
			<Link to={`/details/${props.id}`}>
				<figure info={props.info}>
					<img src={props.img} alt="poster" />
					<p>{props.rating}</p>
					<figcaption>{props.name} </figcaption>
				</figure>
			</Link>
		</div>
	);
};

export default Card;
