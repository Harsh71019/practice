import React from "react";
import "./App.css";
import Homepage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
	<div>
		<h1> HATS PAGE!!! </h1>
	</div>
);

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
