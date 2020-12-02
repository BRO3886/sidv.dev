import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
	const variants = {
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: "easeInOut",
				type: "spring",
				stiffness: 70,
			},
		}),
		hidden: { opacity: 0, y: 150 },
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			custom={props.i}
			variants={variants}
			className="bg-white rounded-xl p-4 transition-shadow duration-400 hover:shadow-xl border-opacity-100 border hover:border-transparent"
		>
			<h1 className="text-lg md:text-xl lg:text-2xl font-bold">{props.project.title}</h1>
			<p className="text-darkgrey py-1">{props.project.subtitle}</p>
			<a href={props.project.redirect}>
				<LazyLoadImage
					effect="blur"
					src={props.project.img}
					alt={props.project.title}
					className="my-2 rounded-md"
				/>
			</a>
			<div className="flex justify-end">
				<a href={props.project.github} className="text-sm text-blue mr-4">
					<img src="assets/contact/Github.svg" className="h-6 md:h-8"></img>
				</a>
				<a href={props.project.link} className="text-sm text-blue">
					<img src="assets/projects/link.svg" className="h-6 md:h-8"></img>
				</a>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
