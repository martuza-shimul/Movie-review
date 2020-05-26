import React from "react";
import { Link } from "@reach/router";

const ActorCard = () => {
	// console.log(props.info);

	return (
		<div className="card">
			<Link to="#">
				<figure>
					<img
						src="https://dummyimage.com/200x250/001233/f9f9f9.jpg&text=No+Image"
						alt="poster"
					/>

					<figcaption>
						<span>Real name</span>
						<span>Character Name</span>
					</figcaption>
				</figure>
			</Link>
		</div>
	);
};

export default ActorCard;
