import React from "react";

const Hero = ({ heroBg }) => {
	// console.log(hero, heroBg);

	return (
		<div
			className="hero"
			style={{
				backgroundImage: `url(${heroBg})`,
			}}
		>
			<form>
				<input type="text" placeholder="Search Movies, Tv Series or Person" />
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default Hero;
