import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
	return (
		<motion.div
			className="loading-container"
			animate={{ rotateZ: ["180deg", "-180deg"] }}
			transition={{ repeat: Infinity }}
		>
			<img src={"pokeball.png"} style={{ height: 100 }} />
		</motion.div>
	);
};

export default Loading;
