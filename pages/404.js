import React from "react";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:image" content="/assets/me.jpg"></meta>
				<meta name="description" content="Developer. Designer. Technology Enthusiast." />
				<title>Siddhartha Varma</title>
			</Head>
			<div className=" flex h-screen">
				<div className="m-auto">
					<div className="items-center text-center">
						<h1 className="md:text-4xl text-lg font-bold text-blue">404</h1>
						<h2 className="text-base md:text-3xl">The page you're looking for does not exist.</h2>
						<Link href="/">
							<button className="bg-lightblue px-5 md:px-10 py-2 md:py-3 mt-10 rounded-lg md:text-lg text-sm text-blue font-medium capitalize hover:bg-blue hover:text-white  border border-transparent">
								{"Home"}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
