import React from "react";
import { motion } from "framer-motion";

const types = {
	fire: "🔥",
	steel: "⚔️",
	ground: "🕳",
	water: "💧",
	poison: "☠️",
	bug: "🐛",
	flying: "🦅",
	normal: "🟤",
	rock: "🪨",
	electric: "⚡️",
	grass: "🍃",
	fairy: "🦄",
	psychic: "😵‍💫",
	ghost: "👻",
	fighting: "🥋",
	ice: "🥶",
	dragon: "🐉",
	dark: "🌒"
};
const Card = ({ card }) => {
	return (
		<motion.div
			initial={{ rotateY: "-90deg" }}
			whileInView={{ rotateY: "0deg" }}
			whileHover={{ rotateZ: "5deg" }}
			viewport={{ once: false }}
			transition={{ delay: 0.1 }}
		>
			<div className="card">
				<div className="id">#{card.id}</div>
				<div className="name">{card.name}</div>
				<div className="icon">
					<img src={card.sprites.front_default} />
				</div>
				<h5>Type</h5>
				<div className="abilities">
					{card.types.map((t) => (
						<div>
							{t.type.name} {types[t.type.name]}{" "}
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Card;
