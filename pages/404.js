import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import content from "../lib/content";

const NotFound = () => {
	return (
		<div className="dark:bg-black">
			<Header />
			<div className=" flex h-screen">
				<div className="m-auto">
					<div className="items-center justify-center text-center">
						<div className="mx-auto flex flex-col">
							<h1 className="text-3xl font-bold text-black dark:text-white">
								{content.nav.logo}
								<span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
							</h1>
							<h1 className="md:text-4xl text-lg font-bold text-blue">404</h1>
							<h2 className="text-base md:text-3xl dark:text-white">The page you're looking for does not exist.</h2>
							<Link href="/">
								<button className="bg-lightblue dark:bg-blue px-5 md:px-10 py-2 md:py-3 mt-10 rounded-lg md:text-lg text-sm text-blue dark:text-white font-medium capitalize hover:bg-blue hover:text-white transition-colors duration-400  focus:outline-none">
									{"HOME"}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
