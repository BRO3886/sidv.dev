import { React, useEffect, useState } from "react";
import Link from "next/link";
import content from "../lib/content";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Landing = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
				<div className="w-8/12 md:w-3/12 m-3">
					<LazyLoadImage
						className="rounded-full"
						effect="blur"
						src={content.landing.img.url}
						alt={content.landing.img.alt}
					/>
				</div>
				<div className="text-black text-center md:text-left">
					<h2 className="text-3xl md:text-5xl font-bold">
						{content.landing.text[0]}
						<br />
						{content.landing.text[1]} <span className="text-blue">{content.landing.text[2]}</span>
					</h2>
					<h1 className="text-grey text-xl">
						{content.landing.text[3]}{" "}
						<Typical
							steps={content.landing.typical}
							loop={Infinity}
							className="inline-block text-grey"
						/>
					</h1>
					<Link href="/contact">
						<button className="bg-lightblue px-10 py-3 md:px-24 mt-10 rounded-lg text-blue font-medium capitalize hover:bg-blue hover:text-white transition-colors duration-400 border border-transparent">
							{content.landing.btnText.toUpperCase()}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
