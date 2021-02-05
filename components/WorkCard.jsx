import React from "react";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const WorkCard = (props) => {
	return (
		<motion.button
			className="text-left focus: outline-none"
			whileTap={{ scale: 0.96 }}
		>
			<a href={props.work.url}>
				<div className="bg-white dark:bg-darkergrey dark:border-transparent rounded-xl border-opacity-100 border">
					<div className="flex items-center">
						<div className="hidden md:block">
							<img src={props.work.img} alt={props.work.title} className="h-40 w-40 rounded-l-xl" />
						</div>
						<div className="px-4 py-2">
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold">{props.work.title}</h2>
							<p className="text-darkgrey mb-2 capitalize">
								{props.work.role} ( {props.work.duration} )
							</p>
							{props.work.about.map((line, index) => {
								return (
									<p className="mb-2" key={index}>
										{line}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</a>
		</motion.button>
	);
};

export default WorkCard;
