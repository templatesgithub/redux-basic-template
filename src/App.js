import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { testDispatch } from "./redux/actions/testActions";

function App() {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(testDispatch("test dispatch"));
	};

	const { text } = useSelector((state) => state.test);

	return (
		<div className="App">
			<button onClick={ handleClick }>Click me</button>
			<p>{ text }</p>
		</div>
	);
}

export default App;
