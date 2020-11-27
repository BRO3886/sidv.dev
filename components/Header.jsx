import React from "react";
import Head from "next/head";

const Header = () => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="theme-color" content="#ffffff" />
			<meta property="og:image" content="/assets/me.webp"></meta>
			<meta name="description" content="Developer. Designer. Technology Enthusiast." />
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
			<title>Siddhartha Varma</title>
		</Head>
	);
};

export default Header;
