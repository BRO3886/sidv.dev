import React from "react";
import Link from "next/link";
import Header from "../components/Header";

const NotFound = () => {
	return (
		<div>
			<Header />
			<div className=" flex h-screen">
				<div className="m-auto">
					<div className="items-center justify-center text-center">
						<div className="mx-auto flex flex-col">
							<img src="logo.svg"></img>
							<h1 className="md:text-4xl text-lg font-bold text-blue">404</h1>
							<h2 className="text-base md:text-3xl">The page you're looking for does not exist.</h2>
							<Link href="/">
								<button className="bg-lightblue px-5 md:px-10 py-2 md:py-3 mt-10 rounded-lg md:text-lg text-sm text-blue font-medium capitalize hover:bg-blue hover:text-white transition-colors duration-400  border border-transparent">
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
