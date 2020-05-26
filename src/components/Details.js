import React from "react";
import ActorCard from "./ActorCard";
// import img from "../img/extraction.jpg";

const Details = props => {
	const data = props.data;
	var details;
	for (let i = 0; i < data.length; i++) {
		// eslint-disable-next-line no-loop-func
		data[i].cardInfo.map(value => {
			// eslint-disable-next-line eqeqeq
			if (props.id == value.id) {
				console.log("id found", value.id);
				return (details = value);
			}
			// eslint-disable-next-line array-callback-return
			return;
		});
	}
	console.log(details);

	return (
		<div className="detailsWrapper">
			<div
				className="heroBlock"
				style={{
					backgroundImage: `url(${details.hero})`,
				}}
			>
				<div className="imgHolder">
					<img src={details.image} alt="poster thumbnails" />
				</div>
				<div className="contentHolder">
					<h1 className="title">{details.name} </h1>
					<h4 className="genre">{details.info.genre} </h4>
					<p className="helper">
						<span className="release">
							<span>R</span> {details.info.releaseDate}
						</span>
						<span className="lang">
							<span>Ln</span> {details.info.language}
						</span>
					</p>

					<p className="plot">{details.info.plot}</p>
					<div className="makers">
						<h3 className="rating">
							<p>Rating</p>
							{details.rating}
						</h3>
						<h3 className="director">
							<p>Director</p>
							{details.info.director}
						</h3>
						<h3 className="story">
							<p>Story</p>
							{details.info.story}
						</h3>
					</div>
				</div>
			</div>
			<div className="extraInfo">
				<div className="info">
					<p className="title">Run Time</p>
					<p>{details.info.runTime}</p>
				</div>
				<div className="info">
					<p className="title">Budget</p>
					<p>${details.info.budget}</p>
				</div>
				<div className="info">
					<p className="title">Revenue</p>
					<p>${details.info.revenue}</p>
				</div>
			</div>
			<div className="actors">
				<h3>Actors</h3>
				<div className="cards">
					<ActorCard />
					<ActorCard />
					<ActorCard />
					<ActorCard />
					<ActorCard />
					<ActorCard />
					<ActorCard />
				</div>
			</div>
		</div>
	);
};

export default Details;
