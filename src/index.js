import React from "react";
import ReactDOM from "react-dom";
import "./scss/style.css";
import { Router } from "@reach/router";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import TVseriesPage from "./components/TVseriesPage";
import PersonPage from "./components/PersonPage";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Router>
			<App path="/" />
			<Details path="/details/:id" />
			<TVseriesPage path="/tv" />
			<PersonPage path="/person" />
		</Router>
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);
