import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Esta es mi web</p>
				<a
					className="App-link"
					href="https://netflix.es"
					target="_blank"
					rel="noopener noreferrer"
				>
					Irene en la segunda rama cambio 1 cambio 2
				</a>
			</header>
		</div>
	);
}

export default App;
