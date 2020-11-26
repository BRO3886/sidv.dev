import React from "react";
import Head from "next/head";

const Header = () => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="theme-color" content="#ffffff" />
			<meta property="og:image" content="/assets/me.jpg"></meta>
			<meta name="description" content="Developer. Designer. Technology Enthusiast." />
			<title>Siddhartha Varma</title>
		</Head>
	);
};

export default Header;
