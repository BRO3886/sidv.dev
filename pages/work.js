import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import content from "../lib/content";
import WorkCard from "../components/WorkCard";

const work = () => {
	return (
		<div className="dark:bg-black dark:text-white">
			<Header />
			<Nav name="work" />
			<div className="w-10/12 pt-20 md:pt-28 mx-auto flex flex-col">
				<h2 className="text-3xl md:text-5xl font-bold md:mt-10">
					Work <span className="text-blue">Experience</span>
				</h2>
        <div style={{ height: "5vh" }}></div>
				<div className="grid grid-cols-1 gap-6 ">
					{content.work.map((work, index) => {
						return <WorkCard work={work} key={index} />;
					})}
				</div>
			</div>
			<div style={{ height: "10vh" }}></div>
			<Footer />
		</div>
	);
};

export default work;
