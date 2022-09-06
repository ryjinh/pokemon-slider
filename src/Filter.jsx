import React from "react";

const Filter = ({ min, max, setMin, setMax }) => {
	const handleMinSlider = (e) => {
		setMin(Number(e.target.value));
	};

	const handleMaxSlider = (e) => {
		setMax(Number(e.target.value));
	};

	return (
		<div className="slider-container">
			<label htmlFor="min">Starting Pokémon # : {min}</label>
			<input
				onChange={handleMinSlider}
				value={min}
				type="range"
				name="min"
				min="1"
				max="900"
			/>
			<label htmlFor="max">Ending Pokémon # : {max}</label>
			<input
				onChange={handleMaxSlider}
				value={max}
				type="range"
				name="max"
				min="1"
				max="900"
			/>
		</div>
	);
};

export default Filter;
