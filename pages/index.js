import Head from "next/head";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<div className="">
			<Head>
				<meta charset="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="description" content="Developer. Designer. Technology Enthusiast" />
				<title>Siddhartha Varma</title>
			</Head>
			<Nav />
			<Landing />
		</div>
	);
}
