import React from "react";
import poweredImg from "../img/powered.png";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="container">
					<div className="copyright">
						<p>
							Built with{" "}
							<span role="img" aria-label="">
								❤️
							</span>
						</p>
						<p>
							{" "}
							© 2020 Lex Go! - Developed by{" "}
							<a href="https://github.com/martuza-shimul">Martuza</a>
						</p>
					</div>
					<div className="credit">
						<img src={poweredImg} alt="Powered By" />
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
