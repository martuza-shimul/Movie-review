import React from "react";
import img from "../img/extraction.jpg";
import heroBG from "../img/dummy.jpg";

const Details = () => {
	return (
		<div className="detailsWrapper">
			<div
				className="heroBlock"
				style={{
					backgroundImage: `url(${heroBG})`,
				}}
			>
				<div className="imgHolder">
					<img src={img} alt="poster thumbnails" />
				</div>
				<div className="contentHolder">
					<h1 className="title">Extraction</h1>
					<h4 className="genre">Drama, Action, Thriller</h4>
					<p className="helper">
						<span className="release">
							<span>R</span> 14th April 2020
						</span>
						<span className="lang">
							<span>Ln</span> English
						</span>
					</p>

					<p className="plot">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
						corrupti mollitia error ipsam iusto, fugiat alias repudiandae facere
						voluptate doloremque!
					</p>
					<div className="makers">
						<h3 className="rating">
							<p>Rating</p>
							8.3
						</h3>
						<h3 className="director">
							<p>Director</p>
							Sam Hargrave
						</h3>
						<h3 className="story">
							<p>Story</p>
							Anthony Russo
						</h3>
					</div>
				</div>
			</div>
			<div className="extraInfo">
				<div className="info">
					<p className="title">Run Time</p>
					<p>1h 56m</p>
				</div>
				<div className="info">
					<p className="title">Budget</p>
					<p>$87,500,000</p>
				</div>
				<div className="info">
					<p className="title">Revenue</p>
					<p>$12,87,500,000</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
