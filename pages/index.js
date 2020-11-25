import Head from "next/head";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="">
			<Nav />
			<Landing />
		</div>
	);
}
