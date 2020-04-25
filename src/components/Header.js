import React from "react";

class Header extends React.Component {
	state = {
		navOpen: false,
	};
	handleNav = () => this.setState({ navOpen: !this.state.navOpen });
	render() {
		return (
			<div>
				<header className="header">
					<nav>
						<div className="logo">
							<h5>
								<a href="/">lex Go!</a>
							</h5>
						</div>
						<div className="navIcon" onClick={this.handleNav}>
							<p></p>
							<p></p>
							<p></p>
						</div>
						<ul className={this.state.navOpen ? "navList navOpen" : "navList"}>
							<li onClick={this.handleNav} className="navItem close">
								<a href="/#">X</a>
							</li>
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
	}
}
export default Header;
