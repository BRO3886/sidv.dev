import React from "react";
import { motion } from "framer-motion";

const ContactLink = (props) => {
	return (
		<motion.div whileTap={{ scale: 0.95 }} className="m-1 inline-block text-white">
			<a href={props.data.link}>
				<img
					src={props.data.img}
					alt={props.data.name}
					className="h-12 md:h-16"
				></img>
			</a>
			{/* <div>{props.data.name}</div> */}
		</motion.div>
	);
};

export default ContactLink;
