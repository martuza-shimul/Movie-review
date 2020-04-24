import React from "react";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="credit">
					<p>
						Built with{" "}
						<span role="img" aria-label="">
							❤️
						</span>
						Powered by <a href="themoviedb.org">The MovieDB</a>
					</p>
				</div>
				<div className="copyright">
					<p>
						{" "}
						© 2020, MovieDB -- Developed by{" "}
						<a href="https://github.com/martuza-shimul">Martuza</a>
					</p>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
