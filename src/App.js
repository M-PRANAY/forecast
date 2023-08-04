// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const api = {
	key: "9a37541b469bdc605b2bc44de7949b73",
	base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
	const [search, Setsearch] = useState("");
	const [weather, Setweather] = useState("");
	const SearchPressed = () => {
		console.log(search);
		fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
			.then((response) => response.json())
			.then((response) => {
				Setweather(response);
				console.log(response);
			});
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="EnterCity.."
				onChange={(e) => Setsearch(e.target.value)}
			></input>

			<button onClick={SearchPressed}>Search</button>

			<p>{weather.name}</p>
		</div>
	);
}

export default App;
