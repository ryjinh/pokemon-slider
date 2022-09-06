import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Filter from "./Filter";
import Loading from "./Loading";

// get all initial pokemon data
// should not rerun when UI is updated
let initialData = [];
for (let i = 1; i <= 898; i++) {
	initialData.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
}

const Grid = () => {
	const [cards, setCards] = useState([]);
	const [filteredCards, setFilteredCards] = useState([]);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(151);

	// resolve promise on component mount
	useEffect(() => {
		setTimeout(() => {
			Promise.all(initialData).then((resp) => {
				let data = resp.map((r) => r.data);
				setCards(data);
			});
		}, 3000);
	}, []);

	// initialise filtered list to initial cards list
	// so that something renders in the beginning
	useEffect(() => {
		setFilteredCards(cards);
	}, [cards]);

	// filter when slider is changed
	useEffect(() => {
		setFilteredCards(cards.filter((c) => c.id <= max && c.id >= min));
	}, [min, max]);

	return (
		<>
			<Filter min={min} setMin={setMin} max={max} setMax={setMax} />
			{filteredCards.length ? (
				<div className="grid">
					{filteredCards.map((c) => (
						<Card card={c} key={c.name} />
					))}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Grid;
