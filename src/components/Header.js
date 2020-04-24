import React from "react";

const Header = () => {
	return (
		<div>
			<header className="header">
				<nav>
					<div className="logo">
						<h5>
							<a href="/">Movie DB</a>
						</h5>
					</div>
					<ul className="navList">
						<li className="navItem">
							<a href="/movie">Movie</a>
						</li>
						<li className="navItem">
							<a href="/tv-series">TV Series</a>
						</li>
						<li className="navItem">
							<a href="/person">Person</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
export default Header;
